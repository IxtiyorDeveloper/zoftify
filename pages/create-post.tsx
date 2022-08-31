import { NextPage } from 'next'
import { Button, CustomSelect, DateInput, TextInput } from 'components/elements'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from 'styles/create-post.module.scss'
import { createPost, getCallStatus } from '../store'
import { useDispatch, useSelector } from 'react-redux'

interface ICreatePostInterface {
  text: string
  time: string
  status: 'published' | 'draft'
}

export const CreateFormSchema = yup.object().shape({
  text: yup.string().required('Title is a required field'),
  time: yup.string().required('Time is a required field'),
  status: yup.mixed().required('Status is a required field'),
})

const CreatePost: NextPage = () => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreatePostInterface>({
    resolver: yupResolver(CreateFormSchema),
  })

  const onSubmit = (data: ICreatePostInterface) => {
    dispatch(
      createPost({
        //@ts-ignore
        status: data?.status?.value,
        text: data?.text,
        time: data.time,
      }),
    )
  }

  const loading = useSelector(getCallStatus('new'))

  return (
    <div className={styles.container}>
      <div className={styles.text}>Post information</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapper}>
          <TextInput
            required
            control={control}
            name="text"
            placeholder="Title"
            error={errors?.text?.message}
          />
          <CustomSelect
            required
            control={control}
            name="status"
            placeholder="Status"
            error={errors?.status?.message}
            options={[
              { value: 'published', label: 'Published' },
              { value: 'draft', label: 'Draft' },
            ]}
          />
          <DateInput
            required
            name="time"
            control={control}
            placeholder="Time"
            error={errors?.time?.message}
          />
          <div className="mt-42">
            <Button
              title="Submit"
              active
              type="submit"
              loading={loading?.isLoading}
              disabled={loading?.isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
export default CreatePost

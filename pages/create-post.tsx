import {NextPage} from "next";
import {Button, CustomSelect, DateInput, TextInput} from "components/elements"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {useEffect} from "react";
import styles from "styles/create-post.module.scss"

interface ICreatePostInterface {
    text: string,
    time: string,
    status: "published" | "draft"
}

export const CreateFormSchema = yup.object().shape({
    text: yup.string().required("Title is a required field"),
    time: yup.string().required("Time is a required field"),
    status: yup.mixed().required("Status is a required field"),
})

const CreatePost: NextPage = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<ICreatePostInterface>({
        resolver: yupResolver(CreateFormSchema),
    })

    const onSubmit = (data:any) => {
        console.log("sassa",data)
    }

    useEffect(() => {
        console.log(errors, "errors")
    }, [errors])

    return (
        <div className="pl-28">
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
                        options={
                            [
                                {value: "published", label: "Published"},
                                {value: "draft", label: "Draft"}
                            ]
                        }
                    />
                    <DateInput
                        required
                        name="time"
                        control={control}
                        placeholder="Time"
                        error={errors?.time?.message}
                    />
                    <Button title="Submit" active type="submit"/>
                </div>
            </form>
        </div>
    )
}
export default CreatePost

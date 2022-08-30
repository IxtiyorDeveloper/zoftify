import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import store from "store"
import DashboardLayout from "../components/layout";
import 'styles/globals.css'
import 'tailwindcss/tailwind.css';
import 'assets/var.scss'
import "react-datepicker/dist/react-datepicker.css";

const persistor = persistStore(store);

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            </PersistGate>
        </Provider>
    )
}

export default MyApp

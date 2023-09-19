"use client";

import {useDispatch} from "react-redux";
import React, {useEffect, ReactNode} from "react";
import {fetchLogin} from "@/redux/auth/user.api";
import {ThunkDispatch} from "@reduxjs/toolkit";

export function Auth({ children }: { children: ReactNode }) {
    const dispatch: ThunkDispatch<any, any, any> = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect((): void => {
        if(window.localStorage.getItem("userPassword") && window.localStorage.getItem("userEmail")) {
            dispatch(fetchLogin({
                userPassword: window.localStorage.getItem("userPassword"),
                userEmail: window.localStorage.getItem("userEmail")
            }))
        }
    }, [])


    return <>{children}</>;
}
"use client"

import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Link from "next/link";
import styled from "styled-components";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, fetchLogin, fetchRegister, isAuth} from "@/redux/auth/user.api";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const inter: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})

const RegisterContainer = styled.div`
  justify-content: center;
  display: flex;
  padding: 36px 16px;
`

const RegistrationForm = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 36px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .1);

  @media (max-width: 450px) {
    padding: 20px 10px;
  }

  @media (max-width: 730px) {
    align-items: center;
    margin: 0 auto 36px;
  }
`

const H1 = styled.h1`
  padding: 10px;
  font-size: 24px;
`

const FormGroup = styled.div<{ active: boolean }>`
  box-shadow: 0 4px 20px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: calc(100% - 4px);
  border-radius: 10px;
  padding: ${(props): string => props.active ? '0' : '2px'};
  border: ${(props): string => props.active ? '2px solid #9BCBBA' : ''};
`

const FormLabel = styled.label`
  padding: 9px;
  opacity: .5;
  font-size: 14px;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: text;
  border-radius: 20px;
`

const FormInput = styled.input`
  padding: 0 9px 9px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  font-size: 16px;

  &:focus {
    outline: none !important;
  }
`

const ButtonSubmit = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #9BCBBA;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  height: 60px;
  font-size: 18px;
  text-align: center;
  line-height: 40px;

  &:hover {
    background-color: #8ABAA9;
  }

  &:focus {
    background-color: #9BCBBA;
  }
`

const FormLink = styled.div`
  margin-top: 20px;

  & a {
    color: #9BCBBA;
  }

  & a:hover {
    text-decoration: underline;
  }
`

export default function RegistrationPage() {
    const [isFocused1, setIsFocused1] = useState<boolean>(false);
    const [isFocused2, setIsFocused2] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const IsAuth: boolean = useSelector(isAuth);
    const dispatch: ThunkDispatch<any, any, any> = useDispatch<ThunkDispatch<any, any, any>>();
    const router: AppRouterInstance = useRouter()

    const {
        register, handleSubmit
    } = useForm({
        defaultValues: {
            userEmail: "", password1: "",
        }, reValidateMode: "onChange"
    });

    const onSubmit = async (values: any): Promise<void> => {
        setLoading(true)
        const {payload} = await dispatch(fetchLogin({
            userPassword: values.password1,
            userEmail: values.userEmail,
        }))
        if(!payload?.userEmail) {
            alert("Не удалось авторизоваться");
        }
        else {
            window.localStorage.setItem("userPassword", values.password1)
            window.localStorage.setItem("userEmail", values.userEmail)
        }
        setLoading(false)
    };

    useEffect(() => window.scrollTo(0, 0), [])

    useEffect((): void => {
        // dispatch(fetchAuthMe())
        if (IsAuth) router.push('/');
    }, [IsAuth])

    if (!IsAuth) return (
        <RegisterContainer>
            <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
                <H1 className={inter.className}>СвойID</H1>
                <FormGroup active={isFocused1}>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput autoFocus={isFocused1}
                               {...register("userEmail", {required: "Укажите почту"})}
                               onFocus={() => {
                                   setIsFocused1(true)
                                   setIsFocused2(false)
                               }}
                               type="email" id="email"/>
                </FormGroup>
                <FormGroup active={isFocused2}>
                    <FormLabel htmlFor="password1">Пароль:</FormLabel>
                    <FormInput autoFocus={isFocused2}
                               {...register("password1", {required: "Укажите пароль"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(true)
                               }}
                               type="password" id="password1"/>
                </FormGroup>
                <div style={{height: 20, color: 'red', marginTop: -5, marginBottom: -15}}>{error}</div>
                <ButtonSubmit type="submit">
                    {loading ? 'Загрузка...' : 'Войти'}
                </ButtonSubmit>
                <FormLink>
                    <Link href='/auth/register'>
                        Зарегистрироваться
                    </Link>
                </FormLink>
            </RegistrationForm>
        </RegisterContainer>
    );
}

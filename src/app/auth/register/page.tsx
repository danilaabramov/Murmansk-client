"use client"

import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Link from "next/link";
import styled from "styled-components";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister} from "@/redux/auth/user.api";
import {ThunkDispatch} from "@reduxjs/toolkit";

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
    const [isFocused3, setIsFocused3] = useState<boolean>(false);
    const [isFocused4, setIsFocused4] = useState<boolean>(false);
    const [isFocused5, setIsFocused5] = useState<boolean>(false);
    const [isFocused6, setIsFocused6] = useState<boolean>(false);
    const [isFocused7, setIsFocused7] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const dispath = useDispatch<ThunkDispatch<any, any, any>>();

    const {
        register, handleSubmit
    } = useForm({
        defaultValues: {
            userLastName: "", userFirstName: "", userPhone: "", email: "", userBDay: "", password1: "", password2: "",
        }, reValidateMode: "onChange"
    });

    const onSubmit = async (values: any): Promise<void> => {
        if (values.password1 !== values.password2) setError('Пароли не совпадают')
        if (values.password1.length < 8) {
            setError('Короткий пароль')
        } else {
            setLoading(true)
            const {payload} = await dispath(fetchRegister({
                // userPassword: values.password1,
                // userFirstName: values.userFirstName,
                // userLastName: values.userLastName,
                // userBDay: values.userBDay,
                // userEmail: values.email,
                // userPhone: values.userPhone
                userPassword: '123123123',
                userFirstName: 'qwewqeqwe',
                userLastName: 'bebrabbebra',
                userBDay: '2001-09-22',
                userEmail: 'ru@ru.ru',
                userPhone: '89123123123'
            }));
            setLoading(false)
            // !payload?.user && alert("Не удалось авторизоваться");
            console.log(payload)
            // if ("access" in payload) {
            //     window.localStorage.setItem("token", payload.access)
            // }
        }
    };

    useEffect(() => window.scrollTo(0, 0), [])

    // if (IsAuth) return <Navigate to='/profile'/>

    return (
        <RegisterContainer>
            <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
                <H1 className={inter.className}>Создание СвойID</H1>
                <FormGroup active={isFocused1}>
                    <FormLabel htmlFor="first_name">Имя:</FormLabel>
                    <FormInput autoFocus={isFocused1}
                               {...register("userFirstName", {required: "Укажите ваше имя"})}
                               onFocus={() => {
                                   setIsFocused1(true)
                                   setIsFocused2(false)
                                   setIsFocused3(false)
                                   setIsFocused4(false)
                                   setIsFocused5(false)
                                   setIsFocused6(false)
                                   setIsFocused7(false)
                               }}
                               type="text" id="first_name"/>
                </FormGroup>
                <FormGroup active={isFocused2}>
                    <FormLabel htmlFor="last_name">Фамилия:</FormLabel>
                    <FormInput autoFocus={isFocused2}
                               {...register("userLastName", {required: "Укажите вашу фамилию"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(true)
                                   setIsFocused3(false)
                                   setIsFocused4(false)
                                   setIsFocused5(false)
                                   setIsFocused6(false)
                                   setIsFocused7(false)
                               }}
                               type="text" id="last_name"/>
                </FormGroup>
                <FormGroup active={isFocused3}>
                    <FormLabel htmlFor="user_phone">Номер телефона:</FormLabel>
                    <FormInput autoFocus={isFocused3}
                               {...register("userPhone", {required: "Укажите ваш номер телефона"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(false)
                                   setIsFocused3(true)
                                   setIsFocused4(false)
                                   setIsFocused5(false)
                                   setIsFocused6(false)
                                   setIsFocused7(false)
                               }}
                               type="text" id="user_phone"/>
                </FormGroup>
                <FormGroup active={isFocused4}>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput autoFocus={isFocused4}
                               {...register("email", {required: "Укажите почту"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(false)
                                   setIsFocused3(false)
                                   setIsFocused4(true)
                                   setIsFocused5(false)
                                   setIsFocused6(false)
                                   setIsFocused7(false)
                               }}
                               type="email" id="email"/>
                </FormGroup>
                <FormGroup active={isFocused5}>
                    <FormLabel htmlFor="birth_date">Дата рождения:</FormLabel>
                    <FormInput autoFocus={isFocused5}
                               {...register("userBDay", {required: "Укажите дату рождения"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(false)
                                   setIsFocused3(false)
                                   setIsFocused4(false)
                                   setIsFocused5(true)
                                   setIsFocused6(false)
                                   setIsFocused7(false)
                               }}
                               type="date" id="birth_date"/>
                </FormGroup>
                <FormGroup active={isFocused6}>
                    <FormLabel htmlFor="password1">Пароль:</FormLabel>
                    <FormInput autoFocus={isFocused6}
                               {...register("password1", {required: "Укажите пароль"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(false)
                                   setIsFocused3(false)
                                   setIsFocused4(false)
                                   setIsFocused5(false)
                                   setIsFocused6(true)
                                   setIsFocused7(false)
                               }}
                               type="password" id="password1"/>
                </FormGroup>
                <FormGroup active={isFocused7}>
                    <FormLabel htmlFor="password2">Повторный пароль:</FormLabel>
                    <FormInput autoFocus={isFocused7}
                               {...register("password2", {required: "Укажите пароль"})}
                               onFocus={() => {
                                   setIsFocused1(false)
                                   setIsFocused2(false)
                                   setIsFocused3(false)
                                   setIsFocused4(false)
                                   setIsFocused5(false)
                                   setIsFocused6(false)
                                   setIsFocused7(true)
                               }}
                               type="password" id="password2"/>
                </FormGroup>
                <div style={{height: 20, color: 'red', marginTop: -5, marginBottom: -15}}>{error}</div>
                <ButtonSubmit type="submit">
                    {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                </ButtonSubmit>
                <FormLink>
                    <Link href='/auth/login'>
                        Войти
                    </Link>
                </FormLink>
            </RegistrationForm>
        </RegisterContainer>
    );
}
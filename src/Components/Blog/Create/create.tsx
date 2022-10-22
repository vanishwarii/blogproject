import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  AppContext,
  BlogDetailsType,
} from "../../../Blogprovider/BlogProvider";

import {
  Form,
  Inputdiv,
  Errormsg,
  Input,
  SubmitButton,
  Formdiv,
  Formhead,
  Formcontentleft,
  Formcontentright,
} from "../../Blog/Create/createstyle";

type blogDetail = {
  blogDate: string;
  blogmonth: string;
  blogEmail: string;
  blogHeading: string;
  blogDescription: string;
  blogTag1: string;
  blogTag2: string;
};
const Create = () => {
  const contextType = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<blogDetail>();

  const onSubmit = (data: blogDetail) => {
    const newBlogData = {
      blogDateof: data.blogDate,
      blogDescriptionOf: data.blogDescription,
      blogEmailof: data.blogEmail,
      blogHeadingOf: data.blogHeading,
      blogMonthof: data.blogmonth,
      blogTag1: data.blogTag1,
      blogTagg2: data.blogTag2,
    } as BlogDetailsType;
    contextType.addNewBlog(newBlogData);
   
    console.log(data, "create");
    navigate('/');

    
  };
  const navigate = useNavigate();

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Formhead>Please Enter the Blog Details...</Formhead>
        <Formdiv>
          <Formcontentleft>
            <Inputdiv>
              <label>Please enter you Email</label>
              <Input
                type="text"
                id="email"
                placeholder="blogEmail"
                {...register("blogEmail", {
                  required: true,
                  // pattern: /^@[a-zA-Z]+$/,
                  maxLength: 20,
                })}
              />
              {errors.blogEmail && errors.blogEmail.type === "pattern" && (
                <Errormsg>Pattern mismatch.</Errormsg>
              )}
              {errors.blogEmail && errors.blogEmail.type === "required" && (
                <Errormsg>Email is Required.</Errormsg>
              )}
              {errors.blogEmail && errors.blogEmail.type === "maxLength" && (
                <Errormsg>Email should be within 20 characters</Errormsg>
              )}
            </Inputdiv>
            <Inputdiv>
              <label>Please enter the Blog date</label>
              <Input
                type="text"
                id="date"
                placeholder="27"
                {...register("blogDate", {
                  required: true,
                })}
              />
              {errors.blogDate && errors.blogDate.type === "pattern" && (
                <Errormsg>Pattern mismatch.</Errormsg>
              )}
              {errors.blogDate && errors.blogDate.type === "required" && (
                <Errormsg>Date is Required.</Errormsg>
              )}
            </Inputdiv>
            <Inputdiv>
              <label>Please enter the Blog Month</label>
              <Input
                type="text"
                id="month"
                placeholder="NOV"
                {...register("blogmonth", {
                  required: true,
                })}
              />
              {errors.blogmonth && errors.blogmonth.type === "pattern" && (
                <Errormsg>Pattern mismatch.</Errormsg>
              )}
              {errors.blogmonth && errors.blogmonth.type === "required" && (
                <Errormsg>Date is Required.</Errormsg>
              )}
            </Inputdiv>
            <Inputdiv>
              <label>Please enter the blog heading</label>
              <Input
                type="text"
                id="heading"
                placeholder="blogHeading"
                {...register("blogHeading", {
                  required: true,
                  maxLength: 30,
                  minLength: 10,
                })}
              />
              {errors.blogHeading &&
                errors.blogHeading.type === "maxLength" && (
                  <Errormsg>
                    Blog heading should be within 30 characters.
                  </Errormsg>
                )}
              {errors.blogHeading && errors.blogHeading.type === "required" && (
                <Errormsg>Blog heading is Required.</Errormsg>
              )}
              {errors.blogHeading &&
                errors.blogHeading.type === "minLength" && (
                  <Errormsg>Blog heading should have 10 characters.</Errormsg>
                )}
            </Inputdiv>
          </Formcontentleft>
          <Formcontentright>
            <Inputdiv>
              <label>Please enter the blog Description</label>
              <Input
                type="textarea"
                id="content"
                placeholder="blogDescription"
                {...register("blogDescription", {
                  required: true,
                  minLength: 20,
                })}
              />

              {errors.blogDescription &&
                errors.blogDescription.type === "required" && (
                  <Errormsg>Blog Content is Required.</Errormsg>
                )}
              {errors.blogDescription &&
                errors.blogDescription.type === "minLength" && (
                  <Errormsg>Blog content should have 20 characters.</Errormsg>
                )}
            </Inputdiv>
            <Inputdiv>
              <label>Please enter the blog Tag1</label>
              <Input
                type="text"
                id="tag1"
                placeholder="Tag1"
                {...register("blogTag1", {
                  required: true,
                  pattern: /^#[a-zA-Z]/,
                  minLength: 5,
                })}
              />

              {errors.blogTag1 && errors.blogTag1.type === "required" && (
                <Errormsg>Blog tag is Required.</Errormsg>
              )}
              {errors.blogTag1 && errors.blogTag1.type === "minLength" && (
                <Errormsg>Blog Tag should have 5 characters.</Errormsg>
              )}
              {errors.blogTag1 && errors.blogTag1.type === "pattern" && (
                <Errormsg>Blog Tag should have 5 characters.</Errormsg>
              )}
            </Inputdiv>
            <Inputdiv>
              <label>Please enter the blog Tag2</label>
              <Input
                type="text"
                id="tag2"
                placeholder="Tag2"
                {...register("blogTag2", {
                  required: true,
                  pattern: /^#[a-zA-Z]/,
                  minLength: 5,
                })}
              />

              {errors.blogTag2 && errors.blogTag2.type === "required" && (
                <Errormsg>Blog tag is Required.</Errormsg>
              )}
              {errors.blogTag2 && errors.blogTag2.type === "minLength" && (
                <Errormsg>Blog Tag should have 5 characters.</Errormsg>
              )}
              {errors.blogTag2 && errors.blogTag2.type === "pattern" && (
                <Errormsg>Blog Tag should have 5 characters.</Errormsg>
              )}
            </Inputdiv>
          </Formcontentright>
        </Formdiv>
        <SubmitButton type="submit">submit</SubmitButton>
      </Form>
    </>
  );
};
export default Create;

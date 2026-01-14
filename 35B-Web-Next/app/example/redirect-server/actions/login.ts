"use server"; // optional
import { redirect } from "next/navigation";

export async function loginAction(username: string){
    if(!username){
        throw new Error("Username is required");
    }
    if(username == "admin"){
        redirect("/example/input-form");
    }else{
        redirect("/example/state");
    }
}

// Classroom Task
// create a new url-path for /example/orders
// /example/orders/success -> "Display Success"
// /example/orders/failure -> "Display Failure"
// /example/orders/unauthorized -> "Display Unathorized"
// on /example/orders
// input for "status", "price" with states
// make 2 button apply and next
// on "apply" button
// use client side redirect to check if price is below 0
// if below redirect to /example/orders/unauthorized
// on "next" button
// use server side redirect to check if status is "active", "inactivate"
// if active - redirect to "/example/orders/success"
// if inactive - redirect to "/example/orders/failure"
// if empty or not "active/inactive" - Display error message
// make use of useTransition in every "redirection"
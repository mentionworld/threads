"use client"

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from "@/lib/Validations/user";

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}

const AccountProfile = ({user, btnTitle}: Props) => {
  
    const from = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    });
    // return (
    //     // <Form></Form>
    // )
}

export default AccountProfile
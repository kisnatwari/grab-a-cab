import * as React from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { REGISTER_URL } from "@/lib/apiEndPoints"


const Register = () => {
    const [authState, setAuthState] = React.useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        console.log("requesting");
        axios.post(REGISTER_URL, authState,{
            
        })
          .then(response => {
                setLoading(false);
                console.log(response);
                setAuthState({
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: ""
                });
            })
          .catch(error => {
                setLoading(false);
            });
    }

    return (
        <Card className="border-0">
            <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>Join us today and enjoy exclusive benefits</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" value={authState.name}
                                onChange={(event) => setAuthState({ ...authState, name: event.target.value })} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="john.doe@example.com" value={authState.email}
                                onChange={(event) => setAuthState({ ...authState, email: event.target.value })} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="***************" value={authState.password}
                                onChange={(event) => setAuthState({ ...authState, password: event.target.value })} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <Input id="password_confirmation" type="password" placeholder="***************" value={authState.password_confirmation}
                                onChange={(event) => setAuthState({ ...authState, password_confirmation: event.target.value })} />
                        </div>
                        <div>
                            <Button onClick={handleSubmit} type="submit" variant="default" className="w-full">Create an Account</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Register;
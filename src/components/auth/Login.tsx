import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Login = () => {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Welcome back!</CardTitle>
                <CardDescription>Log in to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="john.doe@example.com" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="*************" />
                        </div>
                        <div>
                            <Button variant="default" className="w-full">Login Now</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Login;
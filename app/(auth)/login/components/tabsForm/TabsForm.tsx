import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../LoginForm";
import { SignUpForm } from "../SignUpForm";

export const TabsForm = () => {
  return (
    <Tabs defaultValue="signin" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Sign in</TabsTrigger>
            <TabsTrigger value="password">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardContent className="space-y-2">
              <LoginForm/>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardContent className="space-y-2">
              <SignUpForm/>
            </CardContent>
          </Card>
        </TabsContent>
    </Tabs>
  )
}


import * as React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

// Схема валидации для учебных заведений
const educationalFormSchema = z.object({
  institution: z.string().min(2, {
    message: "Название учебного заведения должно содержать не менее 2 символов",
  }),
  contactPerson: z.string().min(2, {
    message: "Имя контактного лица должно содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  phone: z.string().min(10, {
    message: "Пожалуйста, введите корректный номер телефона",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов",
  }),
  interestArea: z.string({
    required_error: "Пожалуйста, выберите область интереса",
  }),
});

type FormValues = z.infer<typeof educationalFormSchema>;

const EducationalForm = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(educationalFormSchema),
    defaultValues: {
      institution: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: "",
      interestArea: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Запрос отправлен",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    
    // После успешной отправки перенаправляем пользователя на главную страницу
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="mr-2" 
            onClick={() => navigate("/")}
          >
            <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
            Назад
          </Button>
          <h1 className="text-3xl font-bold font-montserrat">Информация для учебных заведений</h1>
        </div>
        
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <p className="text-slate-600 mb-6">
              Получайте ценные данные и аналитику для совершенствования образовательных программ и улучшения качества подготовки специалистов 
              в соответствии с актуальными требованиями рынка труда.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Учебное заведение</FormLabel>
                      <FormControl>
                        <Input placeholder="Название учебного заведения" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Контактное лицо</FormLabel>
                        <FormControl>
                          <Input placeholder="ФИО" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (___) ___-__-__" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Ваш email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interestArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Интересующая область</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите область" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="market_data">
                            Данные о востребованных навыках
                          </SelectItem>
                          <SelectItem value="programs_evaluation">
                            Оценка эффективности программ
                          </SelectItem>
                          <SelectItem value="curriculum_adjustment">
                            Корректировка учебных планов
                          </SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Опишите свой запрос подробнее"
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить запрос
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationalForm;

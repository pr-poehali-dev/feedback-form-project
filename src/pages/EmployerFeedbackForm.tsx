
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

// Схема валидации для работодателей
const employerFormSchema = z.object({
  company: z.string().min(2, {
    message: "Название компании должно содержать не менее 2 символов",
  }),
  position: z.string().min(2, {
    message: "Должность должна содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  graduateInstitution: z.string().min(2, {
    message: "Название учебного заведения должно содержать не менее 2 символов",
  }),
  skillsRating: z.string({
    required_error: "Пожалуйста, оцените навыки выпускников",
  }),
  feedback: z.string().min(10, {
    message: "Отзыв должен содержать не менее 10 символов",
  }),
  suggestions: z.string().optional(),
});

type FormValues = z.infer<typeof employerFormSchema>;

const EmployerFeedbackForm = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(employerFormSchema),
    defaultValues: {
      company: "",
      position: "",
      email: "",
      graduateInstitution: "",
      skillsRating: "",
      feedback: "",
      suggestions: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Форма отправлена",
      description: "Спасибо за обратную связь!",
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
          <h1 className="text-3xl font-bold font-montserrat">Обратная связь для работодателей</h1>
        </div>
        
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <p className="text-slate-600 mb-6">
              Ваш отзыв о навыках выпускников поможет учебным заведениям улучшить качество образовательных программ и подготовить специалистов, 
              которые будут лучше соответствовать требованиям рынка труда.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Компания</FormLabel>
                        <FormControl>
                          <Input placeholder="Название компании" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Должность</FormLabel>
                        <FormControl>
                          <Input placeholder="Ваша должность" {...field} />
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
                  name="graduateInstitution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Учебное заведение выпускников</FormLabel>
                      <FormControl>
                        <Input placeholder="Название учебного заведения" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="skillsRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Оценка навыков выпускников</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите оценку" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="excellent">Отлично</SelectItem>
                          <SelectItem value="good">Хорошо</SelectItem>
                          <SelectItem value="average">
                            Удовлетворительно
                          </SelectItem>
                          <SelectItem value="poor">
                            Требуется улучшение
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Отзыв о навыках выпускников</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Опишите сильные и слабые стороны выпускников"
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="suggestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Рекомендации по улучшению программ</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ваши предложения для улучшения образовательных программ"
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Необязательное поле
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить отзыв
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

export default EmployerFeedbackForm;

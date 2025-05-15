
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

type FeedbackFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "employer" | "educational";
};

const FeedbackFormDialog: React.FC<FeedbackFormDialogProps> = ({
  open,
  onOpenChange,
  type,
}) => {
  const isEmployer = type === "employer";
  const schema = isEmployer ? employerFormSchema : educationalFormSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: isEmployer
      ? {
          company: "",
          position: "",
          email: "",
          graduateInstitution: "",
          skillsRating: "",
          feedback: "",
          suggestions: "",
        }
      : {
          institution: "",
          contactPerson: "",
          email: "",
          phone: "",
          message: "",
          interestArea: "",
        },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
    toast({
      title: "Форма отправлена",
      description: "Спасибо за обратную связь!",
    });
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEmployer
              ? "Оставить отзыв о выпускниках"
              : "Запрос дополнительной информации"}
          </DialogTitle>
          <DialogDescription>
            {isEmployer
              ? "Ваш отзыв поможет улучшить качество образовательных программ"
              : "Заполните форму для получения дополнительной информации"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {isEmployer ? (
              // Форма для работодателей
              <>
                <div className="grid grid-cols-2 gap-4">
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
                          className="resize-none"
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
                          className="resize-none"
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
              </>
            ) : (
              // Форма для учебных заведений
              <>
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
                <div className="grid grid-cols-2 gap-4">
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
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <DialogFooter>
              <Button type="submit">
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Отправить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackFormDialog;

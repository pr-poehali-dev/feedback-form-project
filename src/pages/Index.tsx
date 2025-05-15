import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Заголовок и описание */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Обратная связь для образования
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Помогите улучшить качество образования в ИТ-сфере, предоставляя
            обратную связь учебным заведениям о компетенциях их выпускников
          </p>
        </div>

        {/* Две карточки */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Карточка для работодателей */}
          <Card className="overflow-hidden bg-blue-50 border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-montserrat">
                Для работодателей
              </CardTitle>
              <CardDescription>
                Поделитесь опытом работы с выпускниками
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>
                    Оценка реальных навыков сотрудников после испытательного
                    срока
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>
                    Рекомендации по улучшению образовательных программ
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>Влияние на подготовку будущих специалистов</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                asChild
              >
                <Link to="/employer-feedback">Оставить отзыв</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Карточка для учебных заведений */}
          <Card className="overflow-hidden bg-purple-50 border-purple-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-montserrat">
                Для учебных заведений
              </CardTitle>
              <CardDescription>
                Получайте ценную информацию для улучшения программ
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>Актуальные данные о востребованных навыках</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>Оценка эффективности образовательных программ</span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
                  />
                  <span>Возможность корректировки учебных планов</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                asChild
              >
                <Link to="/educational-info">Подробнее</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold font-montserrat mb-4">
            Вместе мы создаем будущее образования
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Наша платформа связывает работодателей и образовательные учреждения,
            обеспечивая непрерывную обратную связь для постоянного
            совершенствования качества образования и подготовки специалистов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

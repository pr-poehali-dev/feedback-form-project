
import * as React from "react";
import FeedbackCard from "@/components/ui/feedback-card";

const Home = () => {
  const employerBenefits = [
    "Оценка реальных навыков сотрудников после испытательного срока",
    "Рекомендации по улучшению образовательных программ",
    "Влияние на подготовку будущих специалистов"
  ];

  const educationalBenefits = [
    "Актуальные данные о востребованных навыках",
    "Оценка эффективности образовательных программ",
    "Возможность корректировки учебных планов"
  ];

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
          <FeedbackCard 
            title="Для работодателей"
            subtitle="Поделитесь опытом работы с выпускниками"
            benefits={employerBenefits}
            buttonText="Оставить отзыв"
            buttonLink="/employer-feedback"
            variant="employer"
          />
          
          <FeedbackCard 
            title="Для учебных заведений"
            subtitle="Получайте ценную информацию для улучшения программ"
            benefits={educationalBenefits}
            buttonText="Подробнее"
            buttonLink="/educational-info"
            variant="educational"
          />
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

export default Home;

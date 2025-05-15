
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

interface FeedbackCardProps {
  title: string;
  subtitle: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  variant: "employer" | "educational";
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  title,
  subtitle,
  benefits,
  buttonText,
  buttonLink,
  variant,
}) => {
  const bgColor = variant === "employer" ? "bg-blue-50 border-blue-100" : "bg-purple-50 border-purple-100";
  
  return (
    <Card className={`overflow-hidden ${bgColor}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-montserrat">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Icon
                name="CheckCircle"
                className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 shrink-0"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          asChild
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;

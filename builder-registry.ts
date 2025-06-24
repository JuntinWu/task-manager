import { type RegisteredComponent } from "@builder.io/sdk-react";
import { Button } from "./src/components/ui/button";

export const customComponents: RegisteredComponent[] = [
  {
    component: Button,
    name: "CustomButton",
    inputs: [
      {
        name: "variant",
        type: "string",
        enum: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
        defaultValue: "default",
      },
      {
        name: "size",
        type: "string",
        enum: ["default", "sm", "lg", "icon"],
        defaultValue: "default",
      },
      {
        name: "children",
        type: "string",
        defaultValue: "Button",
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
      },
    ],
    canHaveChildren: true,
  },
];

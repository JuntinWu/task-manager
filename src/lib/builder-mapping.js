// Builder.io Component Mapping Configuration
// 此文件管理您的本地組件與 Builder.io 的映射關係

export const BUILDER_COMPONENT_MAPPING = {
  // Button 組件映射
  "custom-button": {
    localComponent: "CustomButton", // Builder.io 中的組件名稱
    componentPath: "src/components/ui/button.jsx", // 本地組件路徑
    type: "ui-component", // 組件類型
    description: "Customizable button with multiple variants and sizes",

    // 變體映射 - 對應到您 button.jsx 中的 variant 選項
    variants: {
      default: "default",
      destructive: "destructive",
      outline: "outline",
      secondary: "secondary",
      ghost: "ghost",
      link: "link",
    },

    // 大小映射 - 對應到您 button.jsx 中的 size 選項
    sizes: {
      default: "default",
      sm: "sm",
      lg: "lg",
      icon: "icon",
    },

    // Builder.io 編輯器中可配置的屬性
    builderInputs: [
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
        friendlyName: "按鈕樣式",
        helperText: "選擇按鈕的視覺樣式",
      },
      {
        name: "size",
        type: "string",
        enum: ["default", "sm", "lg", "icon"],
        defaultValue: "default",
        friendlyName: "按鈕大小",
        helperText: "選擇按鈕的尺寸",
      },
      {
        name: "children",
        type: "string",
        defaultValue: "Button",
        friendlyName: "按鈕文字",
        helperText: "顯示在按鈕上的文字",
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
        friendlyName: "禁用狀態",
        helperText: "是否禁用按鈕",
      },
    ],
  },
};

// Helper function to get component mapping by name
export function getComponentMapping(componentName) {
  return BUILDER_COMPONENT_MAPPING[componentName] || null;
}

// Helper function to get all available component mappings
export function getAllComponentMappings() {
  return Object.entries(BUILDER_COMPONENT_MAPPING).map(([name, config]) => ({
    name,
    ...config,
  }));
}

// Function to get Builder.io component configuration
export function getBuilderComponentConfig(componentName) {
  const mapping = getComponentMapping(componentName);
  if (!mapping) return null;

  return {
    name: mapping.localComponent,
    component: mapping.localComponent,
    inputs: getComponentInputs(mapping.type),
    canHaveChildren: mapping.type === "ui-component",
  };
}

function getComponentInputs(type) {
  switch (type) {
    case "ui-component":
      return [
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
      ];
    case "specialized-component":
      return [
        {
          name: "children",
          type: "string",
          defaultValue: "View Task",
        },
        {
          name: "onClick",
          type: "string",
          defaultValue: "",
        },
      ];
    default:
      return [];
  }
}

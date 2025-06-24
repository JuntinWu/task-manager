// Builder.io Component Mapping Configuration
// 此文件管理您的本地組件與 Builder.io 的映射關係

export const BUILDER_COMPONENT_MAPPING = {
  // Button 組件映射 - src/components/ui/button.jsx
  "ui-button": {
    // 基本信息
    localComponent: "Button",
    componentPath: "src/components/ui/button.jsx",
    builderName: "UI Button",
    type: "ui-component",
    description:
      "Customizable button component with variants and sizes using class-variance-authority",

    // 組件分類
    category: "ui-components",
    tags: ["button", "interactive", "form", "action"],

    // 變體映射 - 對應 buttonVariants 中的 variant
    variants: {
      default: {
        name: "Default",
        description: "Primary button style",
        preview: "bg-primary text-primary-foreground",
      },
      destructive: {
        name: "Destructive",
        description: "For dangerous actions",
        preview: "bg-destructive text-white",
      },
      outline: {
        name: "Outline",
        description: "Button with border",
        preview: "border bg-background",
      },
      secondary: {
        name: "Secondary",
        description: "Secondary button style",
        preview: "bg-secondary text-secondary-foreground",
      },
      ghost: {
        name: "Ghost",
        description: "Minimal button style",
        preview: "hover:bg-accent hover:text-accent-foreground",
      },
      link: {
        name: "Link",
        description: "Text link style",
        preview: "text-primary underline-offset-4",
      },
    },

    // 大小映射 - 對應 buttonVariants 中的 size
    sizes: {
      default: {
        name: "Default",
        description: "Standard button size",
        preview: "h-9 px-4 py-2",
      },
      sm: {
        name: "Small",
        description: "Compact button size",
        preview: "h-8 px-3",
      },
      lg: {
        name: "Large",
        description: "Large button size",
        preview: "h-10 px-6",
      },
      icon: {
        name: "Icon",
        description: "Square button for icons",
        preview: "size-9",
      },
    },

    // Builder.io 編輯器中的輸入配置
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
        helperText: "選擇按鈕的視覺樣式變體",
        group: "Style",
      },
      {
        name: "size",
        type: "string",
        enum: ["default", "sm", "lg", "icon"],
        defaultValue: "default",
        friendlyName: "按鈕大小",
        helperText: "選擇按鈕的尺寸",
        group: "Style",
      },
      {
        name: "children",
        type: "string",
        defaultValue: "Button",
        friendlyName: "按鈕文字",
        helperText: "顯示在按鈕上的文字內容",
        group: "Content",
      },
      {
        name: "asChild",
        type: "boolean",
        defaultValue: false,
        friendlyName: "作為子元素",
        helperText: "是否將按鈕渲染為子元素（使用 Radix Slot）",
        group: "Advanced",
        advanced: true,
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
        friendlyName: "禁用狀態",
        helperText: "是否禁用按鈕交互",
        group: "State",
      },
      {
        name: "className",
        type: "string",
        defaultValue: "",
        friendlyName: "自定義樣式",
        helperText: "額外的 CSS 類名",
        group: "Advanced",
        advanced: true,
      },
      {
        name: "onClick",
        type: "action",
        friendlyName: "點擊事件",
        helperText: "按鈕點擊時執行的動作",
        group: "Events",
      },
    ],

    // 依賴項
    dependencies: ["@radix-ui/react-slot", "class-variance-authority", "clsx"],

    // 組件配置
    componentConfig: {
      canHaveChildren: true,
      resizable: false,
      deletable: true,
      copyable: true,
    },

    // 預設範例
    examples: [
      {
        name: "Primary Button",
        props: {
          variant: "default",
          size: "default",
          children: "Click me",
        },
      },
      {
        name: "Outline Button",
        props: {
          variant: "outline",
          size: "default",
          children: "Cancel",
        },
      },
      {
        name: "Destructive Button",
        props: {
          variant: "destructive",
          size: "default",
          children: "Delete",
        },
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

// Button 組件專用輔助函數
export function getButtonMapping() {
  return BUILDER_COMPONENT_MAPPING["ui-button"];
}

export function getButtonVariants() {
  return BUILDER_COMPONENT_MAPPING["ui-button"]?.variants || {};
}

export function getButtonSizes() {
  return BUILDER_COMPONENT_MAPPING["ui-button"]?.sizes || {};
}

export function getBuilderInputsForButton() {
  return BUILDER_COMPONENT_MAPPING["ui-button"]?.builderInputs || [];
}

// Function to get Builder.io component configuration
export function getBuilderComponentConfig(componentName) {
  const mapping = getComponentMapping(componentName);
  if (!mapping) return null;

  return {
    name: mapping.builderName || mapping.localComponent,
    component: mapping.localComponent,
    inputs: mapping.builderInputs,
    canHaveChildren: mapping.componentConfig?.canHaveChildren || true,
  };
}

// 生成 Builder.io 註冊配置
export function generateBuilderConfig(componentName = "ui-button") {
  const mapping = getComponentMapping(componentName);
  if (!mapping) return null;

  return {
    component: mapping.localComponent,
    name: mapping.builderName,
    inputs: mapping.builderInputs,
    canHaveChildren: mapping.componentConfig.canHaveChildren,
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: { name: "Text", options: { text: "Button" } },
      },
    ],
  };
}

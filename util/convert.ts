import svgr from "npm:@svgr/core";
import type { Template } from "npm:@svgr/babel-plugin-transform-svg-component";

export const tsxTemplate: Template = (variables, { tpl }) => {
  return tpl`
function ${variables.componentName}({ size = 24, color = "currentColor", stroke = 2, ...props }) { return (${variables.jsx}); }

${variables.exports}
`;
};

const camelize = function (str: string) {
  str = str.replace(/-/g, " ");

  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    function (word: string, _) {
      return word.toUpperCase();
    },
  ).replace(/\s+/g, "");
};

export async function svgToTsx(name: string, source: string) {
  const basename = name.replace(/\.svg$/, "");
  const content = await svgr.transform(
    source,
    {
      icon: false,
      svgProps: {
        width: "{size}",
        height: "{size}",
        strokeWidth: "{stroke}",
        stroke: "{color}",
      },
      template: tsxTemplate,
    },
    {
      componentName: camelize("Icon-" + basename),
    },
  );

  const result = replaceClassName(content);
  return result;
}

function replaceClassName(content: string) {
  const patterns = [
    {
      match: "className",
      replace: "class",
    },
    {
      match: "strokeWidth",
      replace: "stroke-width",
    },
    {
      match: "strokeLinecap",
      replace: "stroke-linecap",
    },
    {
      match: "strokeLinejoin",
      replace: "stroke-linejoin",
    },
    {
      match: "strokeMiterlimit",
      replace: "stroke-miterlimit",
    },
    {
      match: "strokeDasharray",
      replace: "stroke-dasharray",
    },
    {
      match: "strokeDashoffset",
      replace: "stroke-dashoffset",
    },
    {
      match: "strokeOpacity",
      replace: "stroke-opacity",
    },
    {
      match: "fillOpacity",
      replace: "fill-opacity",
    },
    {
      match: "fillRule",
      replace: "fill-rule",
    },
    {
      match: "clipRule",
      replace: "clip-rule",
    },
    {
      match: "clipPath",
      replace: "clip-path",
    },
  ];
  for (const pattern of patterns) {
    content = content.replace(pattern.match, pattern.replace);
  }
  return content;
}

import React from "react";

function EditorBox() {
  return <div></div>;
}

export default EditorBox;

// import { Editor } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import "@toast-ui/editor/dist/i18n/ko-kr";
// import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
// import React, { useEffect, useRef, useState } from "react";

// import "prismjs/themes/prism.css";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

// import "prismjs/themes/prism.css";
// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
// import Prism from "prismjs";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

// const CONTENT_KEY = "CONTENT";

// const options = {
//   toolbarItems: [["code", "codeblock"]],
// };

// // const initialValue = `\`\`\`\n
// // 코드를 입력하세요.
// // \n\`\`\``;

// function EditorBox({ type }: { type: String }) {
//   const [content, setContent] = useState(`\`\`\`\n
//   ${type === "code" ? "코드" : "출력 결과"}를 입력하세요.
//   \n\`\`\``);
//   const [isDark, setIsDark] = useState(false);
//   const editorRef = useRef<Editor>(null);

//   useEffect(() => {
//     let item = localStorage.getItem(CONTENT_KEY);
//     if (item) {
//       editorRef.current?.getInstance().setMarkdown(item);
//     }
//   }, []);

//   const handleSave = () => {
//     const markdownElement =
//       editorRef.current?.getInstance().getMarkdown() || " ";

//     localStorage.setItem(CONTENT_KEY, markdownElement);
//     let initContent = `${markdownElement}`;
//     setContent(initContent);
//     console.log(content);
//   };

//   const toogleMode = () => {
//     setIsDark((prev) => !prev);
//   };

//   useEffect(() => {
//     console.log(isDark);
//   }, [isDark]);
//   // const toogleMode = () => {
//   //   const editorElement = document.getElementsByClassName(
//   //     "toastui-edior-defaultUI"
//   //   )[0];
//   //   if (editorElement) {
//   //     if (editorElement.classList.contains("toastui-editor-dark")) {
//   //       editorElement.classList.remove("toastui-editor-dark");
//   //     } else {
//   //       editorElement.classList.add("toastui-editor-dark");
//   //     }
//   //   }
//   // };

//   return (
//     <>
//       <Editor
//         ref={editorRef}
//         initialValue={content}
//         height="600px"
//         initialEditType="markdown"
//         useCommandShortcut={true}
//         hideModeSwitch={false}
//         language="ko-KR"
//         // toolbarItems={options.toolbarItems}
//         theme={isDark ? "dark" : "default"}
//         plugins={[ [codeSyntaxHighlight, { highlighter: Prism }]]}
//       />
//       <button onClick={handleSave}>저장하기</button>
//       <button onClick={toogleMode}>토글</button>
//     </>
//   );
// }

// export default EditorBox;

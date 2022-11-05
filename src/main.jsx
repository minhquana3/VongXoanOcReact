import React from "react";
import ReactDOM from "react-dom/client";
import BtnComp from "./ButtonComponent";
import GalleryComp from "./Gallery";
import UpdatedScreenBtnComp from "./UpdateScreenComponent";
import SharedState from "./SharedState";
import Gallery from "./CodingChallengePassingProp";
import FilterableProductTable from "./thinkinginreact/FilterProductTable";
import TabSwitcher from "./TabSwitcher";
import ListConditionalRendering from "./conditionalrendering/ListConditionalRendering";
import LearningUseState from "./LearningUseState";
import ToDo from "./todolist/ToDo";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-3xl shadow-lg py-6 px-4 mx-auto mt-12 rounded-md ">
      <h1 className="text-slate-900 text-3xl mb-8 font-bold">
        Welcome to my app
      </h1>
      <BtnComp />
      <GalleryComp></GalleryComp>
      <UpdatedScreenBtnComp></UpdatedScreenBtnComp>
      <SharedState></SharedState>
      <Gallery></Gallery>
      <FilterableProductTable></FilterableProductTable>
      <TabSwitcher
        tabIds={["first", "second", "third"]}
        getHeader={(tabId) => {
          return tabId[0].toUpperCase() + tabId.slice(1);
        }}
        renderContent={(tabId) => {
          return <p className="text-purple-50">This is the {tabId} items</p>;
        }}
      ></TabSwitcher>
      <ListConditionalRendering></ListConditionalRendering>
      <LearningUseState></LearningUseState>
      <ToDo></ToDo>
    </div>
  </React.StrictMode>
);

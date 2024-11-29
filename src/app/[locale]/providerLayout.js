"use client";
import { Provider } from "react-redux";
import ClientLayout from "./clientLayout";

import { store } from "../store/api";

export default function ProviderLayout({ children, messages, locale }) {
  return (
    <Provider store={store}>
      <ClientLayout locale={locale} messages={messages}>
        <div className="min-h-screen">{children}</div>
      </ClientLayout>
    </Provider>
  );
}

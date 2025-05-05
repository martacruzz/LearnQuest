import { useState } from "react";
import SettingsNav from "../../../components/studentAcademic/settings/SettingsNav";
import AccountPanel from "../../../components/studentAcademic/settings/AccountPanel";
import PreferencesPanel from "../../../components/studentAcademic/settings/PreferencesPanel";
import NotificationsPanel from "../../../components/studentAcademic/settings/NotificationsPanel";
import SecurityPanel from "../../../components/studentAcademic/settings/SecurityPanel";
import AccessibilityPanel from "../../../components/studentAcademic/settings/AccessibilityPanel";
import LanguagePanel from "../../../components/studentAcademic/settings/LanguagePanel";
import IntegrationsPanel from "../../../components/studentAcademic/settings/IntegrationsPanel";

const panels = {
  Conta: <AccountPanel />,
  Preferências: <PreferencesPanel />,
  Notificações: <NotificationsPanel />,
  Segurança: <SecurityPanel />,
  Acessibilidade: <AccessibilityPanel />,
  "Idioma & Região": <LanguagePanel />,
  Conexões: <IntegrationsPanel />,
};

function StudentSettings() {
  const [activePanel, setActivePanel] = useState("Conta");

  return (
    <div className="pl-16 flex h-screen overflow-hidden">
      <SettingsNav active={activePanel} setActive={setActivePanel} />

      <div className="flex-1 overflow-y-auto p-8 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">{activePanel}</h1>
          {panels[activePanel]}
        </div>
      </div>
    </div>
  );
}

export default StudentSettings;


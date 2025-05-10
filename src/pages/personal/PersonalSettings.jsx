import { useState } from "react";
import SettingsNav from "../../components/studentAcademic/settings/SettingsNav";
import AccountPanel from "../../components/studentAcademic/settings/AccountPanel";
import PreferencesPanel from "../../components/studentAcademic/settings/PreferencesPanel";
import NotificationsPanel from "../../components/studentAcademic/settings/NotificationsPanel";
import SecurityPanel from "../../components/studentAcademic/settings/SecurityPanel";
import AccessibilityPanel from "../../components/studentAcademic/settings/AccessibilityPanel";
import LanguagePanel from "../../components/studentAcademic/settings/LanguagePanel";
import IntegrationsPanel from "../../components/studentAcademic/settings/IntegrationsPanel";

const panels = {
  Account: <AccountPanel />,
  Preferences: <PreferencesPanel />,
  Notifications: <NotificationsPanel />,
  Security: <SecurityPanel />,
  Accessibility: <AccessibilityPanel />,
  "Language & Region": <LanguagePanel />,
  Connections: <IntegrationsPanel />,
};

function PersonalSettings() {
  const [activePanel, setActivePanel] = useState("Account");

  return (
    <div className="pl-16 flex h-175 overflow-hidden">
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

export default PersonalSettings;
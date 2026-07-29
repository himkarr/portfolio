import {navbarConfig} from "@/config/Navbar";

import Container from "./Container";
import {ThemeToggleButton} from "./ThemeSwitch";
import {TrackedLink} from "./TrackedLink";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/80 backdrop-blur-sm">
      <Container className="py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 text-sm">
            {navbarConfig.navItems.map((item) => (
              <TrackedLink
                className="text-foreground/80 transition-colors hover:text-foreground"
                key={item.label}
                href={item.href}
                track={{
                  name: "button_click",
                  data: {buttonId: item.label, section: "navbar"},
                }}
              >
                {item.label}
              </TrackedLink>
            ))}
          </div>
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </Container>
    </header>
  );
}

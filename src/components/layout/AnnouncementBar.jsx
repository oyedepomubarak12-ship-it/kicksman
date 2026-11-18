
import { ArrowRight, Truck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Truck size={15} />

        <p>
          DISCOVER YOUR STYLE WITH KICKSMAN
        </p>

        <a href="/shop">
          SHOP NOW <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}


import React from "react";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  action,
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <div className="section-heading-content">
        {eyebrow && (
          <span className="section-eyebrow">
            {eyebrow}
          </span>
        )}

        <h2 className="section-title">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="heading-highlight">
                {highlight}
              </span>
            </>
          )}
        </h2>

        {description && (
          <p className="section-description">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="section-heading-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default SectionHeading;

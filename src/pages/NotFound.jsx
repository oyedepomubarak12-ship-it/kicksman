
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";

import Button from "../components/common/Button";

function NotFound() {
  return (
    <main className="not-found-page">

      <div className="not-found-content">
        <SearchX size={65} />

        <span>PAGE NOT FOUND</span>

        <h1>404</h1>

        <h2>Oops! This page doesn't exist.</h2>

        <p>
          The page you are looking for may have been moved
          or is no longer available.
        </p>

        <Link to="/">
          <Button icon={<ArrowLeft size={18} />}>
            Back to Homepage
          </Button>
        </Link>
      </div>

    </main>
  );
}

export default NotFound;

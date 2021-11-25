import React, { useState } from "react";
import { Price } from "./Price";
import "./PricingTable.css";

export const PricingTable = () => {
  const [monthly, setSelected] = useState(true);

  const triggerToggle = () => {
    setSelected(!monthly);
  };
  return (
    <>
      <div className="pricing-section-header">
        <h1>Pricing & Subscriptions</h1>
        <p>Choose one that's right for you</p>
      </div>

      <div className="pricing-monthly-annual-button">
        <div
          className={`pricing-monthly ${monthly ? "pricing-selected" : ""}`}
          onClick={triggerToggle}
        >
          monthly
        </div>
        <div
          className={`pricing-annual ${!monthly ? "pricing-selected" : ""}`}
          onClick={triggerToggle}
        >
          annual
        </div>
      </div>
      <div className="pricing-cards">
        {/* Personal Card */}
        <div className="pricing-card">
          <div className="pricing-cards-header">
            <h3>Personal</h3>
            <span className="mb-2 text-muted">
              Ideal for individual developers, education, open source
              communities, and small businesses.
            </span>
          </div>
          <div className="pricing-cards-price">
            <h1>$0</h1>
          </div>
          <div className="pricing-cards-lists">
            <ul>
              <li>Docker Desktop</li>
              <li>Unlimited public repositories</li>
              <li>Docker Engine + Kubernetes</li>
              <li>200 images pulls per day</li>
            </ul>
          </div>
          <div className="pricing-cards-btn">
            <button className="pricing-cards-button">Start Now</button>
          </div>
        </div>
        {/* Pro Card */}
        <div className="pricing-card">
          <div className="pricing-cards-header">
            <h3>Pro</h3>
            <span className="mb-2 text-muted">
              Includes pro tools for individual developers who want to
              accelerate their productivity.
            </span>
          </div>
          <div className="pricing-cards-price">
            <Price price={7} monthly={monthly} />
            <div>
              <span>/month</span>
            </div>
          </div>
          <div className="pricing-cards-lists">
            <ul>
              <strong>Everything in Personal, plus:</strong>
              <li>Docker Desktop</li>
              <li>Unlimited private repositories</li>
              <li>5 concurrent builds</li>
              <li>300 Hub vulnerability scans</li>
              <li>5 scoped access tokens</li>
            </ul>
          </div>
          <div className="pricing-cards-btn">
            <button className="pricing-cards-pro-button">Buy Now</button>
            <span>Billed annually for $60. </span>
          </div>
        </div>
        {/* Team Card */}
        <div className="pricing-card">
          <div className="pricing-cards-header">
            <h3>Team</h3>
            <span className="mb-2 text-muted">
              Ideal for teams and includes capabilities for collaboration,
              productivity and security.
            </span>
          </div>
          <div className="pricing-cards-price">
            <Price price={9} monthly={monthly} />
            <div>
              <span>/user/month</span>
              <p>Start with minimum 5 users for $25.</p>
            </div>
          </div>
          <div className="pricing-cards-lists">
            <ul>
              <strong>Everything in Pro: plus:</strong>
              <li>Docker Desktop</li>
              <li>Unlimited teams</li>
              <li>15 concurrent builds </li>
              <li>Unlimited image scans</li>
              <li>Role-based access control</li>
              <li>Unlimited scoped tokens </li>
              <li>Audit logs</li>
            </ul>
          </div>
          <div className="pricing-cards-btn">
            <button className="pricing-cards-team-button">Buy Now</button>
            <span>Billed annually starting at $300. </span>
          </div>
        </div>
        {/* Business */}
        <div className="pricing-card">
          <div className="pricing-cards-header">
            <h3>Business</h3>
            <span className="mb-2 text-muted">
              Ideal for medium and large businesses who need centralized
              management and advanced security capabilities.
            </span>
          </div>
          <div className="pricing-cards-price">
            <h1>$21</h1>
            <div>
              <span>/user/month</span>
            </div>
          </div>
          <div className="pricing-cards-lists">
            <ul>
              <strong>Everything in Team, plus:</strong>
              <li>Docker Desktop</li>
              <li>Centralized management</li>
              <li>Image Access Management</li>
              <li>SAML SSO *coming soon</li>
              <li>Purchase via invoice</li>
            </ul>
          </div>
          <div className="pricing-cards-btn">
            <button className="pricing-cards-button">Learn More</button>
            <span>Only available with an annual subscription. </span>
          </div>
        </div>
      </div>
    </>
  );
};

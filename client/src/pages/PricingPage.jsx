import React from 'react';

const plans = [
  {
    name: 'FREE',
    price: '₹0',
    features: ['Library access', '5 bookmarks', 'No downloads', 'No points'],
  },
  {
    name: 'ACHIEVER',
    price: '₹49',
    features: [
      'Library access',
      '10 bookmarks',
      '2 downloads per day',
      '1 point per view/download',
    ],
  },
  {
    name: 'GENIUS',
    price: '₹99',
    features: [
      'Library access',
      'Unlimited bookmarks',
      '5 downloads per day',
      '2 points per view/download',
    ],
  },
];

const PricingPage = () => (
  <div className="container py-4">
    <h2 className="text-center mb-4">Subscription Plans</h2>
    <div className="row">
      {plans.map((p) => (
        <div key={p.name} className="col-md-4 mb-3">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <h4 className="card-title">{p.name}</h4>
              <h2 className="card-text mb-3">{p.price}</h2>
              <ul className="list-unstyled mb-3">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="btn btn-outline-primary" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-muted mt-3">
      Payments are for display only in this demo.
    </p>
  </div>
);

export default PricingPage;


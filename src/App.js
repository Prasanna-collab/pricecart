import "./App.css";
import Card from "./Card";

function App() {
  let free = {
    title: "FREE",
    price: 0,
    user: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    public: "Unlimited Public Projects",
    publicEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    projects: "Unlimited Private Projects",
    projectsEnabler: false,
    support: "Dedicated Phone Support",
    supportEnabler: false,
    domain: "Free Subdomain",
    domainEnabler: false,
    reports: "Monthly status reports",
    reportsEnabler: false,
  };
  let plus = {
    title: "PLUS",
    price: 9,
    user: "5 Users",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    public: "Unlimited Public Projects",
    publicEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    projects: "Unlimited Private Projects",
    projectsEnabler: true,
    support: "Dedicated Phone Support",
    supportEnabler: true,
    domain: "Free Subdomain",
    domainEnabler: true,
    reports: "Monthly status reports",
    reportsEnabler: false,
  };
  let pro = {
    title: "PRO",
    price: 49,
    user: "Unlimited Users",
    userEnabler: true,
    storage: "Unlimited Storage",
    storageEnabler: true,
    public: "Unlimited Public Projects",
    publicEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    projects: "Unlimited Private Projects",
    projectsEnabler: true,
    support: "Dedicated Phone Support",
    supportEnabler: true,
    domainContent: "Unlimited",
    domain: "Free Subdomain",
    domainEnabler: true,
    reports: "Monthly status reports",
    reportsEnabler: true,
  };

  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <Card type={free} />
          <Card type={plus} />
          <Card type={pro} />
        </div>
      </div>
    </section>
  );
}

export default App;

const className = "greeting";
const userName = { firstName: "Arun", lastName: "Dhoundiyal" };
const fullName = (userName) => `${userName.firstName} ${userName.lastName}`;
const element = (
  <div>
    <h1 className={className}>Hello {fullName(userName)}</h1>
    <p>Good To See You.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

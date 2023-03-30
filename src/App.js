import "./App.css";
import image from "./photo/warning.jpg";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function registeri(data) {
    console.log(data);
  }
  console.log(watch("firstName"));
  console.log(errors);
  return (
    <div className="container">
      <div className="leftDiv">
        <h1>Learn to code by watching others</h1>
        <h2>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </h2>
      </div>
      <div className="rightDiv">
        <div className="rightDivUp">
          <span className="span1">Try it free 7 days</span>
          <span className="span2">&nbsp;then $20/mo. thereafter</span>
        </div>
        <div className="formDiv">
          <form onSubmit={handleSubmit(registeri)}>
            <div className={`form1 ${errors.firstName ? "activeFormDiv" : ""}`}>
              <input
                type="text"
                placeholder="firstName"
                {...register("firstName", { required: true })}
              />

              <img
                className={errors.firstName && "activeImg"}
                src={image}
                alt=""
              />
            </div>

            <p className={errors.firstName && "active"}>
              First Name cannot be empty
            </p>

            <div className={`form1 ${errors.lastName ? "activeFormDiv" : ""}`}>
              <input
                type="text"
                placeholder="lastName"
                {...register("lastName", { required: true })}
              />
              <img
                className={errors.lastName && "activeImg"}
                src={image}
                alt=""
              />
            </div>
            <p className={errors.lastName && "active"}>
              Last Name cannot be empty
            </p>
            <div className={`form1 ${errors.email ? "activeFormDiv" : ""}`}>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <img className={errors.email && "activeImg"} src={image} alt="" />
            </div>
            <p className={errors.email && "active"}>
              Looks like this is not an email
            </p>
            <div className={`form1 ${errors.password ? "activeFormDiv" : ""}`}>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
              />

              <img
                className={errors.password && "activeImg"}
                src={image}
                alt=""
              />
            </div>
            <p className={errors.password && "active"}>
              Password cannot be empty
            </p>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
          </form>
          <div className="spanDiv">
            <span className="span3">
              By clicking the button, you are agreeing to our&nbsp;
            </span>
            <span className="span4">Terms and Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

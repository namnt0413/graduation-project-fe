import { useState } from "react";
import axios from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await axios.post("/forgot-password", { email });
      console.log(response)
    //   setStatus(response.data.status);
    } catch (e) {
        console.log(e)
    }
  };
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
              relative mx-auto max-w-[525px]
              overflow-hidden rounded-lg bg-white
              py-16 px-10 text-center
              sm:px-12 md:px-[60px]"
            >

              <div className="mb-10 text-center mb-16">
                Forgot your password? Please enter your email
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className=" bordder-[#E9EDF4] w-full
                    rounded-md border bg-[#FCFDFE]
                    py-3 px-5 text-base text-body-color
                    placeholder-[#ACB6BE] outline-none
                    focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ForgotPassword;

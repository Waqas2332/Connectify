import SigninForm from "../component/forms/Signin";

const GuestHome = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 font-body">
      <div className="bg-primary min-h-screen px-12 flex flex-col items-start justify-center gap-4">
        <h2 className="font-heading text-3xl font-semibold heading">
          Connectify{" "}
          <span className="block text-xl italic font-normal">
            Where Every Connection Tells a Story
          </span>
        </h2>
        <p className="sub-heading">
          From sharing moments to exploring new interests, Connectify empowers
          you to connect with others authentically. Join us today and be part of
          a diverse network of individuals united by the power of connection
        </p>
      </div>
      <div className="min-h-screen px-12 flex flex-col items-start justify-center gap-4">
        <SigninForm />
      </div>
    </section>
  );
};

export default GuestHome;

"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            height={32}
            width={32}
          />
          <h1>ActionCam</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              ActionCam makes screen recording easy. From quick walkthroughs to
              full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />

              <div>
                <h2>Amin Khan</h2>
                <p>Software Engineer</p>
              </div>
            </article>
          </section>
        </div>
        <p>© ActionCam 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              height={40}
              width={40}
            />
            <h1>ActionCam</h1>
          </Link>
          <p>
            Create and share your very first <span>ActionCam video</span> in no
            time!
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            Sign in with Google
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;

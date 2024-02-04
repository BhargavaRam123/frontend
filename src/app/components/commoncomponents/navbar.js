"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { NavbarLinks } from "../../../../public/data/navbar-links";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from "../homecomponents/profiledropdown";
import { categories } from "@/app/services/apis";
import { apiconnector } from "@/app/services/apiconnector";
import { IoIosArrowDropdown } from "react-icons/io";
export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sublinks, setsublinks] = useState([]);

  async function fetchsublinks() {
    const result = await apiconnector("Get", categories.CATEGORIES_API);
    // console.log("result is:", result.data.category)
    setsublinks(result.data.category);
  }
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  // console.log("user details is", user);
  useEffect(() => {
    fetchsublinks();
    // console.log(pathname)
    // console.log(token);
  }, [pathname, searchParams, token]);
  // console.log("value of token is:", token);
  return (
    <>
      <div className="navcontainer">
        <div className="navlogo">
          <Image
            src="/assets/Logo/Logo-Full-Light.png"
            layout="intrinsic"
            width={150}
            height={150}
          />
        </div>
        <div className="navlinks">
          {NavbarLinks.map((obj) => {
            if (obj.title === "Catalog")
              return (
                <>
                  <div className="catalog">
                    <div className="heading1wa">{obj.title}</div>
                    <div className="dropdown">
                      <div>
                        {sublinks.map((obj) => {
                          // console.log(sublinks)
                          return (
                            <div className="sublinkeach">
                              <Link
                                href="/"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {obj.name}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="diamond"></div>
                    <IoIosArrowDropdown
                      style={{
                        color: "white",
                        marginLeft: "3px",
                        marginTop: "2px",
                      }}
                    />
                  </div>
                </>
              );

            return (
              <>
                <Link
                  style={{
                    color: pathname === obj.path ? "yellow" : "",
                  }}
                  href={obj.path}
                  className="heading1wa"
                >
                  {obj.title}
                </Link>
              </>
            );
          })}
        </div>
        <div className="entry">
          {token === null && (
            <>
              <div>
                <Link href="/login" className="heading1wa">
                  Login
                </Link>
              </div>
              <div>
                <Link href="/signup" className="heading1wa">
                  Sign Up
                </Link>
              </div>
            </>
          )}
          {user && (
            <div className="navicon">
              <FaSearch style={{ color: "white" }} />
            </div>
          )}
          {user && user?.accountType != "Instructor" && (
            // <div>
            <div
              className="cart"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link href="/dashboard/cart">
                <IoCartOutline style={{ color: "white" }} />
              </Link>
              <span>{totalItems}</span>
            </div>
            // </div>
          )}
          <div>{token !== null && <ProfileDropDown details={user} />}</div>
        </div>
      </div>
    </>
  );
}

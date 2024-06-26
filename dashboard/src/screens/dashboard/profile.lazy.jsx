import { Avatar, Input } from "components";

import { Edit2 } from "react-feather";
import { Link } from "router";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    try {
      axios.get("/").then((res) => {
        const data = res.data;
        setProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row__profile__row">
          <div className="container__main__content__details__main__row__profile__row__image">
            <Avatar className="container__main__content__details__main__row__profile__row__image__img" />
            <div className="container__main__content__details__main__row__profile__row__image__button">
              <input type="file" />
              <Edit2 size={20} color="currentColor" />
            </div>
          </div>
          <div className="container__main__content__details__main__row__profile__row__content">
            <div className="container__main__content__details__main__row__profile__row__content__name">
              {profile.firstName}
            </div>
            <div className="container__main__content__details__main__row__profile__row__content__email">
              johndoe@gmail.com
            </div>
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter first name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <Input type="email" label="Email" placeholder="Enter email" />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              secure
              type="password"
              label="Password"
              placeholder="Enter password"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              secure
              type="password"
              label="Confirm Password"
              placeholder="Enter confirm password"
            />
          </div>
        </div>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={"/dashboard"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}

import axios from "axios";
export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export function registerUser(formData: User): Promise<string> {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8080/api/user/register", {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      })
      .then((response) => {
        resolve(response.data.message);
      })
      .catch((err) => reject(err));
  });
}

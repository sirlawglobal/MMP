// app/routes/profile/edit.tsx
import { Form } from "@remix-run/react";

export default function EditProfile() {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="text-xl font-semibold">Edit Your Profile</h2>
      <Form method="post" className="space-y-4 mt-4">
        <input name="name" placeholder="Name" className="input" required />
        <textarea name="bio" placeholder="Short Bio" className="input" rows={3}></textarea>

        <label>Skills</label>
        <select name="skills" multiple className="input">
          <option value="Marketing">Marketing</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Product">Product</option>
        </select>

        <input name="goals" placeholder="Your Goals" className="input" />
        <button type="submit" className="btn">Save Profile</button>
      </Form>
    </div>
  );
}

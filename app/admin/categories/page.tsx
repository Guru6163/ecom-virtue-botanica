"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AdminCategoriesTable } from "@/components/admin/admin-categories-table";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function AdminCategoriesPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchData, setFetchData] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isFormValid = title && description && slug && image;

  const handleSubmit = async () => {
    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, slug, image }),
      });

      if (!res.ok) {
        throw new Error("Failed to create category");
      }
      toast.success("✅ Category created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      // Reset form fields
      setTitle("");
      setDescription("");
      setSlug("");
      setImage("");

      // Trigger table refresh
      setFetchData(true);

      // Close the dialog
      setIsDialogOpen(false);
    } catch (err) {
      toast.error("❌ Failed to create category", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <ToastContainer />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <span className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Category
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
              <DialogDescription>
                Create some categories to filter the products
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="slug" className="text-right">
                  Slug
                </Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Category"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <AdminCategoriesTable fetchData={fetchData} setFetchData={setFetchData} />
    </div>
  );
}

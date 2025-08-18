'use client';
import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ResetButton() {
  const [form, setForm] = useState<HTMLFormElement | null>(null);

  useEffect(() => {
    const foundForm = document.getElementById('form') as HTMLFormElement;
    setForm(foundForm);
  }, []);

  const reset = () => {
    console.log(form);
    
    
    if (form) form.reset();
  };

  return (
    
    <Link href={'/'}>
    <button type="reset" className="search-btn" onClick={reset}>
        
      <X className="cursor-pointer" />
    </button>
    </Link>
    
   
    
  );
}

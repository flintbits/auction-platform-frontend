import type { LucideIcon } from "lucide-react";
import {
  Building,
  FileText,
  Flag,
  Globe,
  Hash,
  Home,
  Image,
  Map,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import type { OnboardingFieldType } from "../types/onboarding.types";

export const organizerFormSchema: (OnboardingFieldType & {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
})[] = [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter full name",
      leftIcon: User,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter phone number",
      leftIcon: Phone,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Enter company name",
      leftIcon: Building,
    },

    {
      id: "avatarUrl",
      label: "Avatar URL",
      type: "text",
      placeholder: "Enter avatar URL",
      leftIcon: Image,
    },

    {
      id: "website",
      label: "Website",
      type: "text",
      placeholder: "Enter website URL",
      leftIcon: Globe,
    },

    {
      id: "bio",
      label: "Bio",
      type: "text",
      placeholder: "Enter bio",
      leftIcon: FileText,
    },

    {
      id: "addressLine1",
      label: "Address Line 1",
      type: "text",
      placeholder: "Enter address line 1",
      leftIcon: Home,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "addressLine2",
      label: "Address Line 2",
      type: "text",
      placeholder: "Enter address line 2",
      leftIcon: Home,
    },

    {
      id: "city",
      label: "City",
      type: "text",
      placeholder: "Enter city",
      leftIcon: MapPin,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "state",
      label: "State",
      type: "text",
      placeholder: "Enter state",
      leftIcon: Map,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "Enter country",
      leftIcon: Flag,
      fieldValidators: [{ type: "required" }],
    },

    {
      id: "postalCode",
      label: "Postal Code",
      type: "text",
      placeholder: "Enter postal code",
      leftIcon: Hash,
      fieldValidators: [{ type: "required" }],
    },
  ];

import OnboardingForm from '@/features/onboarding/components/OnboardingForm';
import { Button } from '@shared/ui/Button/Button';
import Typography from '@shared/ui/Typography/Typography';
import { Link } from '@tanstack/react-router';
import styles from './styles/Onboarding.module.css';

/*
ID          int64     `json:"id" db:"id"`
UserID      int64     `json:"user_id" db:"user_id"`
Email       string    `json:"email" db:"email"`
FullName    string    `json:"full_name" db:"full_name"`
PhoneNumber string    `json:"phone_number" db:"phone_number"`

CompanyName string `json:"company_name" db:"company_name"`
Website     string `json:"website" db:"website"`
Bio         string `json:"bio" db:"bio"`

AddressLine1 string `json:"address_line1" db:"address_line1"`
AddressLine2 string `json:"address_line2" db:"address_line2"`
City         string `json:"city" db:"city"`
State        string `json:"state" db:"state"`
Country      string `json:"country" db:"country"`
PostalCode   string `json:"postal_code" db:"postal_code"`

KYCStatus        string     `json:"kyc_status" db:"kyc_status"`
KYCVerifiedAt    *time.Time `json:"kyc_verified_at" db:"kyc_verified_at"`
IdentityDocURL   string     `json:"identity_doc_url" db:"identity_doc_url"`
TaxID            string     `json:"tax_id" db:"tax_id"`


MaxActiveAuctions int  `json:"max_active_auctions" db:"max_active_auctions"`
CanCreateAuction  bool `json:"can_create_auction" db:"can_create_auction"`
IsSuspended       bool `json:"is_suspended" db:"is_suspended"`
*/

type Props = {}

export default function OnboardingPage({ }: Props) {
  return (
    <div className={styles.onboardingContainer}>
      <Typography as="h1" weight='light' >Onboarding Form</Typography>
      <OnboardingForm />
      <Button variant="primary" >Submit</Button>
      <Link to="/dashboard" className={styles.routelink}>Dashboard</Link>
    </div>
  )
}

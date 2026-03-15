import OnboardingForm from '@/features/onboarding/components/OnboardingForm';
import styles from './styles/Onboarding.module.css';

type Props = {}

export default function OnboardingPage({ }: Props) {
  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.content}>

        <h1>Onboarding Form</h1>
        <OnboardingForm />
      </div>
    </div>
  )
}

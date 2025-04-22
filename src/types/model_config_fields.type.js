import { venues } from "./venues.type"

const customDocumentationFields = {
  "custom_documentation_folder": {
    label: "Custom Documentation Folder",
    type: "String"
  }
}

const healthPlansFields = {
  cmr_initial_state: {
    label: "Initial state for CMRs",
    type: "String"
  },
  completion_path: {
    label: "Path to Complete Interventions",
    type: "String"
  },
  days_for_explicit_authorization: {
    label: "Days for Explicit Authorization",
    type: "Number"
  },
  failed_contact_attempts_limit: {
    label: "Maximum Number of Failed Contact Attempts Allowed",
    type: "Number"
  },
  follow_ups_inherit_answers: {
    label: "Follow-Ups Inherit Answers",
    type: 'OneZero'
  },
  gaps_in_care_set: {
    label: "Gaps in Care Set",
    type: "String"
  },
  pending_gaps_in_care_set: {
    label: "Pending Gaps in Care Set",
    type: "String"
  },
  generate_completed_interventions_report: {
    label: "Generate Completed Interventions Report",
    type: "OneZero"
  },
  hcp_tmr_Unknown: {
    label: "Enable Unknown HCP TMR",
    type: "OneZero"
  },
  hcp_tmr_GAP_IN_CARE: {
    label: "Enable Gap in Care HCP TMRs",
    type: "OneZero"
  },
  hcp_tmr_SUPD: {
    label: "Enable SUPD HCP TMRs",
    type: "OneZero"
  },
  hcin_number: {
    label: "Secondary Insurance ID",
    type: "String"
  },
  hic_char: {
    label: "Contract #",
    type: "String"
  },
  medicare: {
    label: "Medicare Plan",
    type: "OneZero"
  },
  patient_satisfaction_survey: {
    label: "Patient Satisfaction Survey",
    type: "Select",
    values: {
      id: "Aprexis", label: "Standard Aprexis Patient Satisfaction Survey",
      id: "Employer Group", label: "Employer Group Patient Satisfaction Survey",
      id: "Medicare Part D", label: "Medicare Part D Patient Satisfaction Survey"
    }
  },
  patient_search_algorithm_classes: {
    label: "Patient Search Algorithm Classes",
    type: "List"
  },
  require_doc_attestation: {
    label: "Requires Attestation of HCP Contact",
    type: "OneZero"
  },
  requires_explicit_authorization: {
    label: "Requires Explicit Authorization",
    type: "OneZero"
  },
  requires_person_number: {
    label: "Requires Person Number",
    type: "OneZero"
  },
  show_pharmacy_claims: {
    label: "Show Pharmacy Claims",
    type: "OneZero"
  },
  save_claim_submission_files: {
    label: "Show Claim Submission Files",
    type: "OneZero"
  },
  video_call_requirements: {
    label: "Video Call Requirements",
    type: "Select",
    options: { allow_multiple: true },
    values: [
      { id: "date_of_birth", label: "Date of Birth" },
      { id: "health_plan_number", label: "Member ID" },
      { id: "zip_code", label: "ZIP Code" }
    ]
  }
}

const interventionFields = {
  priority_authorization: {
    label: 'Priority Authorization',
    type: "OneZero"
  }
}

const pharmacyStoresFields = {
  config_consent_form: {
    label: "Consent Form Defaults",
    type: "Boolean"
  },
  config_create_pdfs_zip_interval: {
    label: "Create PDFs ZIP Interval",
    type: "Select",
    values: [
      { id: 'daily', label: 'Daily' },
      { id: 'weekly', label: 'Weekly' },
      { id: 'monthly', label: 'Monthly' }
    ]
  },
  config_max_fax_attempts: {
    label: "Maximum Fax Attempts",
    type: "Number"
  },
  config_venue_defaults: {
    label: "Venue Defaults",
    type: "Select",
    values: venues
  },
  drx_security_key: {
    label: "DRX Security Key",
    type: "String"
  },
  drx_store_slug: {
    label: "DRX Store Slug",
    type: "String"
  },
  telehealth_pharmacy_store: {
    label: "Telehealth Pharmacy",
    type: "OneZero"
  }
}

const usersFields = {
  config_notifications_daily: {
    label: 'Daily Notifications?',
    type: "YesNo"
  },
  config_notifications_weekly: {
    label: 'Weekly Notifications?',
    type: "YesNo"
  },
  user_title: {
    label: "Title",
    type: "String"
  }
}

const videoFields = {
  phone_call_enabled: {
    label: "Phone Call Enabled",
    type: "OneZero"
  },
  video_call_enabled: {
    label: "Video Call Enabled",
    type: "OneZero"
  }
}

export const modelConfigFields = {
  ...customDocumentationFields,
  ...healthPlansFields,
  ...interventionFields,
  ...pharmacyStoresFields,
  ...usersFields,
  ...videoFields
}

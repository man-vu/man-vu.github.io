# Man Vu - ABELSoft Project Contributions Summary

**GitHub:** manv-ABEL | **Repository:** ABELDent/apollo
**Period:** 2017 - Present (March 2026)
**26 Merged Pull Requests to master** | **170+ Azure DevOps Work Items**

---

## Projects & Areas of Impact

### 1. Financial System (Payments, Ledger, Receivables Manager)
**Area Paths:** Financial - Payments, Financial - Ledger, Financial - Bulk Payments, Receivables Manager, Financial - Future Transactions

**Key Contributions:**
- **Payment Window Service Refactoring (AB#182273, AB#159007, AB#162808, AB#162809):** Led the proof-of-concept to move `PatientPaymentAsync` from the client-side to `FinancialService`, ensuring atomic/transactional safety using `TransactionScope`. This architectural shift prevents partial payment failures from corrupting financial data.
- **TransactionScope for Charge Plans (AB#180374):** Added transactional integrity to the `UpdateChargePlan` method, resolving a critical bug where 14+ patient accounts were affected by charge plan deletion failures.
- **SQL Performance Optimization (AB#179964):** Optimized the `AccountFinancialView` by removing unnecessary `DISTINCT` keywords and replacing JOIN clauses with `OUTER APPLY` to simplify the execution plan tree -- directly resolving critical performance issues for v15 customers on cloud and local plus.
- **Payment Audit Logging (AB#174894, AB#182216):** Implemented payment audit trail logging to track and investigate duplicate payment issues and payment review anomalies.
- **RWP Retry Mechanism (AB#177929):** Implemented retry logic for Real World Payment (RWP) insertion to prevent `RWP 000000` records caused by concurrent payment entry.
- **Overpayment Credit Fix (AB#182375):** Created hotfix to add missing credits for overpayments that patients could not apply automatically.
- **Receivables Manager AR by Financial Practice (AB#131568):** Developed the ability to display Accounts Receivable filtered by Financial Practice in the Receivables Manager.
- **Custom Financial Reports (AB#170453, AB#176207, AB#180917):** Generated custom AR and Payment Plan reports for specific customer needs.
- **Duplicate Payment Investigation (AB#174693, AB#177333, AB#174666):** Investigated and resolved black hole issues with duplicate payments and phantom entries on the Payment Review report.
- **Financial Tab Performance (AB#171681, AB#176785, AB#179607, AB#179887, AB#180253):** Investigated and resolved multiple performance issues with the Financial Ledger tab across cloud and local deployments.

**Impact:** Ensured financial data integrity for dental practices, reduced support call volume from payment-related bugs, and improved financial module performance for cloud customers.

---

### 2. Treatment Tab & Charting
**Area Paths:** Treatment tab, Restorative Charting - CLASS B

**Key Contributions:**
- **Future Service Date Investigation (AB#180824, AB#182684, AB#180834):** Led a multi-phase investigation into a critical "black hole" bug where treatments were being added with future dates. Implemented comprehensive AppInsights logging to trace the workflow causing the issue.
- **Same-Day Treatment Deletion Workflow (AB#180285):** Built the complete workflow for deleting same-day treatments that lacked bill numbers, transaction details, and transaction status -- resolving a high-volume call generator.
- **Treatment Deletion Bug Fixes (AB#180905, AB#180594, AB#180562, AB#180544):** Fixed multiple variants of treatment deletion failures including object reference errors, orphaned lab records, and stranded chart transactions.
- **Arithmetic Overflow Fix (AB#173751, AB#183312):** Diagnosed and fixed arithmetic overflow errors in treatment billing and insurance coverage calculations.
- **Race Condition Fix (AB#174692):** Fixed a `NullReferenceException` race condition in `ChartingView` Dispatcher by using null-conditional operators with `Dispatcher.InvokeAsync` and adding diagnostic logging.

**Impact:** Eliminated a major source of support calls by resolving treatment data integrity issues that affected multiple dental offices. The future date investigation required systematic root-cause analysis across the entire treatment workflow.

---

### 3. Imaging Integration & Direct Capture
**Area Paths:** Imaging Integration - CLASS B, Imaging - CLASS B

**Key Contributions:**
- **Celfa NewTom NNT Bridge (AB#179598):** Built a new imaging bridge for NewTom NNT X-Ray scanners, including fixing patient duplication and date format handling issues.
- **XDR Imaging Alternate Bridge (AB#182291):** Created an alternate XDR bridge using DD/MM/YYYY date format to support international dental offices with different date conventions.
- **Direct Capture Scanning Fix (AB#183346):** Fixed object reference errors when triggering the direct capture scan button or template buttons.
- **Async & Lazy Loading for Imaging (AB#174312):** Developed an experimental POC for asynchronous and lazy loading of the imaging TreeView and database image info, improving imaging tab performance.
- **Troubleshooting DLL for Scanning (AB#175633):** Contributed to a diagnostic DLL for troubleshooting scanning/imaging capture failures.

**Impact:** Enabled ABELDent to support new imaging hardware vendors, improved imaging performance, and resolved critical scanning errors affecting daily clinical workflows.

---

### 4. Application Insights & Observability (PostSharp / Automated Logging)
**Area Paths:** Cross-cutting concern across all modules

**Key Contributions:**
- **Automated Error Logging with PostSharp (AB#180245):** Designed and implemented automatic error message logging to Application Insights using PostSharp aspect-oriented programming, applied to all classes across the codebase. This was a fundamental infrastructure improvement enabling proactive error detection.
- **TrackEvent Migration (AB#180245):** Migrated error handling in `HandleExceptionOnUiAttribute` to use `ABELSoft.Base.ToolBox.Log.TrackEvent` for consistent telemetry.
- **Insurance Audit Logging (AB#161500, AB#182932):** Added tracing and audit logs to insurance operations to track assignment changes and improve traceability of transaction events with procedure codes and tooth numbers.
- **Payment Audit Logging (AB#174894):** Introduced audit logging for payment operations to track and investigate discrepancies on Payment Summary reports.
- **False Positive Filtering (AB#182216):** Modified logging filters to reduce noise from false positive error reports in production telemetry.
- **Charge Transaction Logging (AB#182932):** Enhanced logging in `AddChartTransactionAsync` with detailed bill information for better auditing and troubleshooting.

**Impact:** Transformed ABELDent's production observability from reactive to proactive. The PostSharp-based automatic logging dramatically reduced time-to-diagnosis for production issues and enabled data-driven investigation of previously unresolvable "black hole" bugs.

---

### 5. Patient Communication & Data Sync (CDC)
**Area Paths:** Patient Communication, Batch Messaging

**Key Contributions:**
- **Azure Function & Logic App for Data Sync (AB#139269):** Created Azure Functions and Logic Apps for running data sync changes triggered from the database -- a foundational piece of the cloud messaging infrastructure.
- **CDC Data Sync Flags (AB#177344):** Added CDC (Change Data Capture) flags to indicate syncing direction for tables and created PowerShell scripts to generate T-SQL for CDC-enabling tables.
- **SMS Chat Error Resolution (AB#180156, AB#180329):** Investigated and worked on fixes for digital signature verification errors and internal server errors in SMS chat functionality.
- **Data Sync Failure Investigation (AB#180278, AB#180235):** Diagnosed and resolved data sync failures caused by foreign key constraints and NULL column conflicts.
- **Appointment Reminder Automation (AB#179896):** Contributed to automating appointment time in advance appointment reminder testing.
- **LS+ Messaging Preview (AB#139535):** Participated in the LS+ Messaging preview program for early customer deployments.

**Impact:** Enabled reliable patient communication through cloud-based messaging and data synchronization between local and cloud environments.

---

### 6. ABELDent Scribe (AI Clinical Notes)
**Area Paths:** Restorative Charting - CLASS B, Clinical Notes CLASS B

**Key Contributions:**
- **User Registration (AB#179909):** Implemented the ABELScribe user registration workflow.
- **Patient Consent Clinical Note (AB#179931):** Built the patient consent clinical note feature for ABELDent Scribe.
- **Custom Templates UI (AB#180595):** Developed UI changes for creating custom templates in the ABELDent Scribe Clinical Note Recorder.
- **Installer DLL Integration (AB#180629):** Ensured required DLLs were included in the ABELDent Scribe installer.
- **Feature Switch Visibility (AB#180916):** Fixed visibility of 'ABELDent Scribe Templates' category when the feature switch was turned off.

**Impact:** Contributed to the launch of ABELDent Scribe, a new AI-powered clinical note-taking product that automates documentation for dental practitioners.

---

### 7. Reports
**Area Paths:** Reports - Financial, Reports - Other

**Key Contributions:**
- **Phone List Report Fix (AB#183329):** Fixed a bug where the appointment phone list report showed too few results by enabling display of all 4 phone number types (home, work, mobile, other) with dynamic line layout.
- **Chart Exam Report Printing (AB#176455):** Fixed name truncation in the Chart Exam Report when printed with long patient names.
- **Summarized Daily Totals (AB#170987):** Resolved inability to print Summarized Daily Totals for inactive providers.
- **Financial Notations Report (AB#149947):** Fixed an SEHException crash in the Financial Notations Report.
- **Active Patient Count (AB#158446):** Ensured 'Overall Practice' was populated in the Usual Dentist combobox for Active Patient Count report.
- **Receivables by Past Date Script (AB#163489):** Created custom SQL scripts to report receivables as of a specific historical date.

**Impact:** Improved reporting accuracy and reliability for dental office management and financial reconciliation.

---

### 8. Service Architecture & Infrastructure
**Key Contributions:**
- **NuGet Package Management (AB#182273):** Managed service NuGet package versioning to fix incorrect service contract exposure between `ICompositionServiceContract` and `IFinancialServiceContract`.
- **Integration Manager Error Handling (AB#177969):** Silenced and gracefully handled `ServiceBusSetupConfigs.txt` errors in the Integration Manager startup program, resolving unhappy customer reports.
- **OData Client Exception Handling (AB#182613):** Fixed `DataServiceClientException` in OData Client Proxy by pluralizing resource segment names ('tdis').
- **WCF Message Size (AB#177201):** Resolved claim attachment lookup errors caused by exceeding the WCF incoming message size quota -- only impacting cloud deployments.
- **Threading Safety (AB#182810):** Ensured `Keyboard.Focus` is called on the UI thread in `ReceivablesManagerViewModel`, preventing STA threading exceptions.
- **NullReferenceException in MainWindow (AB#180406):** Silenced `NullReferenceException` in `WpfFrameworkViewModel.SetActiveTile`.

**Impact:** Improved system stability, graceful error handling, and architectural consistency across the ABELDent application stack.

---

### 9. Cloud Operations & DevOps
**Key Contributions:**
- **Deployment Tracking (AB#179256, AB#179273):** Managed deployment tracking for releases 2025.11 and 2025.12.
- **Cloud Performance Investigation (AB#180253):** Investigated R2 CAE ring performance issues using Apdex scoring.
- **Data Conversions (AB#178238):** Performed data append operations for customer database migrations.
- **Cloud vs Local Data Validation (AB#179658):** Investigated and resolved file differences between Cloud and LS+ data for customer onboarding.
- **Time Unit Modification Performance (AB#177958):** Optimized time unit modification scripts that were causing v15 update failures due to slow performance.

**Impact:** Ensured smooth cloud deployments, customer onboarding, and production reliability.

---

### 10. Legacy System (Classic ABELDent)
**Key Contributions:**
- **Forms Auth String Algorithm (AB#171588, AB#171599):** Fixed the algorithm constructing authorization strings in Classic Forms.
- **Document Manager Patient Lookup (AB#166569):** Ensured `ClinicalPatient` lookup worked regardless of padding spaces.
- **Payment Partial Joins (AB#156263):** Added conditions to prevent incorrect joins on `tinstrans = 0` in payment partial calculations.
- **Portal Health History (AB#140249):** Updated the Health History form in the patient portal.

**Impact:** Maintained and improved the legacy Classic ABELDent system while the organization transitioned to the modern CS (Client-Server) architecture.

---

## Summary of Experience & Skills Demonstrated

### Technical Skills
- **C# / .NET / WPF** - Desktop application development with MVVM pattern
- **SQL Server** - Query optimization, stored procedures, execution plan analysis, data integrity scripts
- **WCF / OData Services** - Service-oriented architecture, client proxy management, NuGet package versioning
- **Azure** - Application Insights, Azure Functions, Logic Apps, Service Bus, Cloud deployments
- **PostSharp (AOP)** - Aspect-oriented programming for cross-cutting concerns
- **Threading & Concurrency** - Race condition diagnosis, STA thread management, Dispatcher patterns
- **Imaging Integration** - Bridge development for medical imaging hardware (XDR, NewTom NNT, Celfa)
- **CDC (Change Data Capture)** - Data synchronization between local and cloud databases
- **DevOps** - Deployment tracking, NuGet package management, hotfix DLL distribution

### Domain Knowledge
- **Dental Practice Management Software** - Financial ledger, treatment charting, insurance claims, patient communication, imaging, receivables management
- **Healthcare Compliance** - HIPAA-aware logging, patient data handling
- **Financial Systems** - Payment processing, insurance billing, accounts receivable, charge plans

### Impact Categories
| Category | Count | Description |
|----------|-------|-------------|
| Bug Fixes (Critical) | 15+ | Resolved production-impacting bugs affecting patient financials and treatments |
| Performance Optimization | 6+ | SQL and application-level performance improvements for cloud/local deployments |
| New Features | 8+ | Imaging bridges, ABELDent Scribe, Receivables Manager enhancements |
| Observability & Logging | 8+ | PostSharp automation, AppInsights integration, audit trails |
| Data Integrity | 5+ | Transaction scope, payment atomicity, treatment data consistency |
| Infrastructure | 4+ | Azure Functions, CDC data sync, service architecture refactoring |
| Customer Hotfixes | 5+ | Time-sensitive fixes deployed directly to affected customers |

---

## Complete Pull Request Log

| Date | PR # | Work Item | Title |
|------|-------|-----------|-------|
| 2026-03-18 | #11033 | AB#183329 | Display all 4 phone numbers on appointment phone list report |
| 2026-03-16 | #11017 | AB#183346 | Fix object reference error in direct capture scan button |
| 2026-03-12 | #10993 | AB#174692 | Fix NullReferenceException race condition in ChartingView Dispatcher |
| 2026-03-11 | #10981 | AB#183312 | Fix arithmetic overflow error in CalculateInsuranceCoverageAmount |
| 2026-02-24 | #10884 | AB#182216 | Modify logging to reduce false positives in payment audit |
| 2026-02-24 | #10861 | AB#182932 | Enhance logging in AddChartTransactionAsync for auditing |
| 2026-01-28 | #10834 | AB#182810 | Ensure Keyboard.Focus called on UI thread in ReceivablesManager |
| 2026-01-20 | #10815 | AB#182684 | Added more logging for future service dates investigation |
| 2026-01-14 | #10799 | AB#177969 | Silence error in IntegrationManager startup |
| 2026-01-13 | #10795 | AB#182613 | Pluralize 'tdis' to fix resource segment error |
| 2026-01-07 | #10762 | AB#182375 | OneTimeHotFix - added credits for missing overpayments |
| 2025-12-18 | #10739 | AB#182291 | XDRImagingAlternateBD for DD/MM/YYYY date format |
| 2025-12-18 | #10738 | AB#182273 | Updated Service NuGet Package to 1.2.118 |
| 2025-12-16 | #10735 | AB#182273 | Bump NuGet version to fix service contract exposure |
| 2025-12-15 | #10732 | AB#182273 | [POC] Move PatientPaymentAsync to FinancialService |
| 2025-11-04 | #10642 | AB#180245 | Switch to TrackEvent in HandleExceptionOnUiAttribute |
| 2025-11-04 | #10638 | AB#180905 | Improved ID deletion checks and null handling |
| 2025-10-31 | #10629 | AB#180245 | Automatic error logging to AppInsights via PostSharp |
| 2025-10-23 | #10605 | AB#179598 | Fixed duplicating patients and date issues with Celfa NNT Bridge |
| 2025-10-24 | #10603 | AB#180824 | AppInsights logging for future service date treatments |
| 2025-10-21 | #10585 | AB#180285 | Workflow for deleting same-day treatments |
| 2025-10-16 | #10582 | AB#180594 | Fix conditional check for secondary insurance transaction ID |
| 2025-10-21 | #10568 | AB#180562 | OneTimeHotFix to delete a future treatment |
| 2025-09-26 | #10538 | AB#179964 | Optimized AccountFinancialView SQL (removed DISTINCT, OUTER APPLY) |
| 2025-09-20 | #10525 | AB#180374 | Added TransactionScope to UpdateChargePlan for atomicity |
| 2025-09-22 | #10524 | AB#180406 | Silence NullReferenceException in WpfFrameworkViewModel |

---

*Generated on 2026-03-19 from GitHub PR history and Azure DevOps work items*

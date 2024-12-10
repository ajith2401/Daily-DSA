|-- .DS_Store
|-- .env
|-- .eslintrc.cjs
|-- .gitignore
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vercel.json
|-- vite.config.js
|-- public
  |-- Bridgeimg.svg
  |-- Careersimg.svg
  |-- Dollarimg.svg
  |-- Flashimg.svg
  |-- Googleicon.svg
  |-- Heartimg.svg
  |-- Homeimg.svg
  |-- Laptopimg.svg
  |-- Leafimg.svg
  |-- Learninging.svg
  |-- Placementimg.svg
  |-- Timetableimg.svg
  |-- android-chrome-192x192.png
  |-- android-chrome-512x512.png
  |-- apple-touch-icon.png
  |-- downarrow.svg
  |-- favicon-16x16.png
  |-- favicon-32x32.png
  |-- favicon.ico
  |-- googleLogo.svg
  |-- horizontalarrow.svg
  |-- logo.png
  |-- logo.svg
  |-- robots.txt
  |-- sideImage.svg
  |-- site.webmanifest
  |-- sitemap.xml
  |-- assets
    |-- Collaborative learning.svg
    |-- Industry-led learning.svg
    |-- Skill-building.svg
    |-- about.webp
    |-- be-industry-ready.svg
    |-- become-a-guest-faculty.svg
    |-- empower-a-campus.svg
    |-- hero section landing page 1.webp
    |-- identifyChallenges.svg
    |-- mission.svg
    |-- right image.png
    |-- values.svg
    |-- vision.svg
    |-- advisoryPersons
      |-- Diptivilasa D..jpg
      |-- Dr.Charru Malhotra.jpg
      |-- amanbadavi.jpg
      |-- jayati talpatra.jpg
      |-- saurabh mullick.jpg
    |-- aboutus
      |-- about.webp
      |-- community-health.svg
      |-- educational-outreach.svg
      |-- environmental-sustaiability.svg
      |-- gallery.jpg
      |-- gender-inclusive.svg
      |-- skill-development-program.svg
    |-- library
      |-- assesments.png
      |-- courses.png
    |-- social-icons
      |-- facebook.svg
      |-- insta.svg
      |-- linkedin.svg
      |-- twitter.svg
    |-- ourTeams
      |-- Ajith Kumar.jpg
      |-- Amal.jpg
      |-- kamal.jpg
      |-- krishnaKant.jpg
      |-- navdheep.jpg
      |-- rushikesh.jpg
      |-- shiv Agarwal.jpg
|-- src
  |-- .DS_Store
  |-- App.css
  |-- App.jsx
  |-- index.css
  |-- main.jsx
  |-- constants
    |-- Academicdata.json
    |-- IndustryType.json
    |-- SearchFilterOptions.js
    |-- TimeZones.json
    |-- TopicsOfExpertise.json
    |-- data.json
    |-- image.js
    |-- jobpostData.js
    |-- state.json
  |-- hooks
    |-- usePageMetaData.jsx
    |-- useParseContent.jsx
    |-- useShare.js
    |-- useUploadToS3.js
  |-- utils
    |-- BlogBlock.jsx
    |-- HeadConfig.jsx
    |-- PageContext.jsx
    |-- ProfileContext.jsx
    |-- RichTextEditor.jsx
    |-- ScrollToTopButton.jsx
    |-- animation.js
    |-- checkCookie.js
    |-- convertToIST.js
    |-- encodeAndDecode.js
    |-- formatURL.js
    |-- helper.js
    |-- helperComponent.jsx
    |-- hooks.js
    |-- refetchUser.js
    |-- useRazorpayPayment.js
  |-- redux
    |-- encodeAndDecode.js
    |-- store.js
    |-- api
      |-- assessmentApi.js
      |-- blogApi.js
      |-- claudeAiAPI.js
      |-- connectionApi.js
      |-- jobApi.js
      |-- lmsApi.js
      |-- onevarsityDashboardApi.js
      |-- organizationApi.js
      |-- paymnetApi.js
      |-- postApi.js
      |-- profileApi.js
      |-- proposalApi.js
      |-- uploadMediaApi.js
      |-- userApi.js
    |-- slice
      |-- connectionSlice.js
      |-- formSlice.js
      |-- lmsSlice.js
      |-- notificationSlice.js
      |-- postSlice.js
      |-- profileSlice.js
      |-- userSlice.js
  |-- components
    |-- EmailSender.jsx
    |-- ForgotPassowrd.jsx
    |-- Gallery.jsx
    |-- JobCard.jsx
    |-- JobCardPopUp.jsx
    |-- Navbar.jsx
    |-- NewFooter.jsx
    |-- SignInForm.jsx
    |-- SignUpForm.jsx
    |-- claudeChat.jsx
    |-- paymentComponent.jsx
    |-- Buttons
      |-- NewToggleButton.jsx
      |-- Oauth.jsx
      |-- PostButton.jsx
      |-- RoundedButton.jsx
      |-- SquareButton.jsx
      |-- ToggleButton.css
      |-- ToggleButton.jsx
    |-- Forms
      |-- AddSkillForm.jsx
      |-- ContactUsForm.jsx
      |-- CreateSingleCollege.jsx
      |-- CreateSingleDepartment.jsx
      |-- DynamicForm.jsx
      |-- EditEventForm.jsx
      |-- EditProfileForm.jsx
      |-- EventBulkSChedulerForm.jsx
      |-- EventSchedulerForm.jsx
      |-- MessagePopUpForm.jsx
      |-- PageCreationForm.jsx
      |-- ProposalForm.jsx
      |-- SalesAdminLogin.jsx
      |-- SalesAdminPopup.jsx
      |-- SingleSectionForm.jsx
    |-- LmsComponents
      |-- Calendar.jsx
      |-- Colleges.jsx
      |-- Dashboardmain.jsx
      |-- DayViewEventsGrid.jsx
      |-- Departments.jsx
      |-- MonthlyCalendar.jsx
      |-- Section.jsx
      |-- Staff.jsx
      |-- Student.jsx
      |-- Subjects.jsx
      |-- TimetableCalendar.jsx
    |-- Loader
      |-- ov-spinner.svg
    |-- Boxes
      |-- EditDeleteBox.jsx
      |-- ImageSliderBox.jsx
      |-- MiddleBox.jsx
      |-- SearchPosts.jsx
      |-- SideBox.jsx
    |-- OneVarsity
      |-- OneVarsityHome.jsx
      |-- dashborad.jsx
    |-- Modals
      |-- DeleteConfirmation.jsx
      |-- PDFViewer.jsx
      |-- PopUpScreen.jsx
      |-- ShareModal.jsx
    |-- Notification
      |-- Notification.jsx
    |-- PostActions
      |-- PostActionBar.jsx
    |-- shimmer
      |-- CampusConnectShimmer.jsx
    |-- Cards
      |-- LikedByCard.jsx
      |-- PostDetailsActionCards
        |-- JobPostActionDetailsCard.jsx
        |-- JobPostDetailsComment.jsx
        |-- LikeCommentShareBtns.jsx
        |-- PostActionDetailsCard.jsx
    |-- UserDashboardComponents
      |-- ApplicationStatus.jsx
      |-- AppliedJobs.jsx
      |-- PostedJobs.jsx
      |-- ProposalList.jsx
      |-- SharedWithRecruiter.jsx
      |-- UserDashboardHome.jsx
      |-- ViewApplicants.jsx
      |-- ProposalHelpers
        |-- DenyProposalModal.jsx
        |-- NegotiateProposalModal.jsx
        |-- ProposalDetailsViewModal.jsx
        |-- ProposalItem.jsx
        |-- ProposalModal.jsx
        |-- ProposalTableHeader.jsx
        |-- ProposalTabs.jsx
        |-- ReviewModal.jsx
        |-- SearchFilter.jsx
        |-- sampleData.js
  |-- pages
    |-- AdminWelcome.jsx
    |-- BlogAdminPage.jsx
    |-- BlogDetailsPage.jsx
    |-- BlogPage.jsx
    |-- LifeVitae.jsx
    |-- NewsDetails.jsx
    |-- NewsPage.jsx
    |-- NotFound.jsx
    |-- PageCreation.jsx
    |-- PrivacyNotification.jsx
    |-- RenderEditorData.jsx
    |-- UserCalendar.jsx
    |-- UserDashboard.jsx
    |-- ConnectionError
      |-- NoConnection.jsx
    |-- dashboardPages
      |-- LmsDashboard.jsx
    |-- otherPages
      |-- NewCareers.jsx
      |-- NewContactUs.jsx
      |-- NewOfferings.jsx
      |-- PrivacyPolicy.jsx
      |-- TermsCondition.jsx
    |-- fraternity
      |-- Fraternity.jsx
    |-- AboutUs
      |-- NewAboutUs.jsx
      |-- aboutUsSections
        |-- AdvisoryBoardAndOurTeams.jsx
        |-- CommunityInitiativeAndGallery.jsx
        |-- HeaderAndAchievements.jsx
    |-- CampusConnect
      |-- NewCampusConnect.jsx
      |-- library
        |-- AssessmentLists.jsx
        |-- Assessment_Details.jsx
        |-- Library.jsx
      |-- SubComponents
        |-- FeedPage.jsx
        |-- FeedPollForm.jsx
        |-- JobFeedForm.jsx
        |-- NewCommentBox.jsx
        |-- NewJobCard.jsx
        |-- NewPollCard.jsx
        |-- NewPostAction.jsx
        |-- NewPostCard.jsx
        |-- NewPostDetails.jsx
        |-- PostFeedForm.jsx
        |-- SelectTypeOfPost.jsx
        |-- ccformFields.js
    |-- Home
      |-- NewHome.jsx
      |-- homeSections
        |-- Hero.jsx
        |-- IdentifyingChallenges.jsx
        |-- OurPurposeStatement.jsx
        |-- OurSolutions.jsx
        |-- WhoChooseOnevarsity.jsx
        |-- WhoIsOnevarsityFor.jsx
        |-- WhoWeAre.jsx
    |-- profile
      |-- NewProfile.jsx
      |-- subComponents
        |-- About.jsx
        |-- Education.jsx
        |-- Experience.jsx
        |-- Projects.jsx
        |-- formFields.js
    |-- orgnization
      |-- Organization.jsx
      |-- OrganizationPageCreation.jsx
      |-- organizationFormFields.js
      |-- college
        |-- College.jsx
        |-- UpdatePageProfilePicture.jsx
      |-- company
        |-- subComponents
          |-- Company.jsx
          |-- CompanyAbout.jsx
          |-- CompanyHome.jsx
          |-- CompanyJobs.jsx
          |-- CompanyPosts.jsx
          |-- Courses.jsx
          |-- CreateCompanyPage.jsx
          |-- CreateUpdateCompanyForm.jsx
          |-- EditCompanyProfileForm.jsx
          |-- OrgPeople.jsx
          |-- Stepper.jsx
          |-- companyFormFields.js

                  
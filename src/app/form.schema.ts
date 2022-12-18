export const schema = {
  title: 'Application For Software engineer position',
  showProgressBar: 'top',
  progressBarType: 'buttons',
  pages: [
    {
      name: 'personalInformation',
      navigationTitle: {
        default: 'Personal information',
        fr: 'Informations personnelles',
      },
      navigationDescription: {
        default: 'Tell us about you',
        fr: 'Parlez nous de vous',
      },
      startWithNewLine: false,
      showQuestionNumbers: 'off',
      elements: [
        {
          type: 'text',
          name: 'fullname',
          title: {
            default: 'Full name',
            fr: 'Nom et prénom',
          },
          isRequired: true,
        },
        {
          type: 'text',
          name: 'address',
          title: {
            default: 'Address',
            fr: 'Adresse',
          },
          isRequired: true,
        },
        {
          type: 'text',
          name: 'country',
          title: {
            default: 'Country',
            fr: 'Pays',
          },
          isRequired: true,
        },
        {
          type: 'text',
          name: 'phone',
          title: {
            default: 'Telephone number',
            fr: 'Numéro de téléphone',
          },
          inputType: 'tel',
          isRequired: true,
          validators: [
            {
              type: 'regex',
              regex: '\\+[0-9]{1} \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}',
              text: 'Phone number must be in the following format: +0 (000) 000-00-00',
            },
          ],
        },
        {
          type: 'text',
          name: 'email',
          title: {
            default: 'Email',
            fr: 'Adresse email',
          },
          inputType: 'email',
          isRequired: true,
        },
      ],
    },
    {
      name: 'educationTraining',
      navigationTitle: {
        default: 'Education and training',
        fr: 'Éducation et formation',
      },
      navigationDescription: {
        default: 'Tell us about your education',
        fr: 'Parlez-nous de votre formation',
      },
      elements: [
        {
          type: 'paneldynamic',
          name: 'educations',
          title: {
            default: 'Educations',
            fr: 'Formations',
          },
          keyName: 'diploma',
          showQuestionNumbers: 'off',
          templateTitle: {
            default: 'Education #{panelIndex}',
            fr: 'Formation #{panelIndex}',
          },
          minPanelCount: 1,
          maxPanelCount: 3,
          panelAddText: {
            default: 'Add another education',
            fr: 'Ajouter une autre formation',
          },
          panelRemoveText: {
            default: 'Remove education',
            fr: 'Supprimer la formation',
          },
          templateElements: [
            {
              type: 'dropdown',
              name: 'diploma',
              title: {
                default: 'Diploma',
                fr: 'Diplôme',
              },
              isRequired: true,
              showNoneItem: true,
              showOtherItem: true,
              choices: [
                {
                  value: 'bac',
                  text: {
                    default: 'High school Degree',
                    fr: 'Baccalauréat',
                  },
                },
                {
                  value: 'bachelor',
                  text: {
                    default: 'Bachelor Degree',
                    fr: 'License',
                  },
                },
                {
                  value: 'master',
                  text: {
                    default: 'Master Degree',
                    fr: 'Master',
                  },
                },
                {
                  value: 'doctorate',
                  text: {
                    default: 'Doctoral Degree',
                    fr: 'Doctorat',
                  },
                },
              ],
            },
            {
              type: 'text',
              name: 'school',
              title: {
                default: 'School or University',
                fr: 'Ecole ou université',
              },
              isRequired: true,
            },
            {
              type: 'text',
              name: 'graduationYear',
              title: {
                default: 'Graduation year',
                fr: "Année d'obtention du diplôme",
              },
              inputType: 'date',
              isRequired: true,
            },
            {
              type: 'comment',
              name: 'description',
              title: {
                default: 'Description of what you have studied',
                fr: 'Description de ce que vous avez étudié',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'experience',
      navigationTitle: {
        default: 'Experience',
        fr: 'Experience',
      },
      navigationDescription: {
        default: 'Tell us more about your experience',
        fr: 'Dites-nous en plus sur votre expérience',
      },
      elements: [
        {
          type: 'paneldynamic',
          name: 'experiences',
          title: {
            default: 'Experiences',
            fr: 'Expériences',
          },
          keyName: 'position',
          showQuestionNumbers: 'off',
          templateTitle: {
            default: 'Experience #{panelIndex}',
            fr: 'Expérience #{panelIndex}',
          },
          minPanelCount: 1,
          maxPanelCount: 3,
          panelAddText: {
            default: 'Add another experience',
            fr: 'Ajouter une autre expérience',
          },
          panelRemoveText: {
            default: 'Remove experience',
            fr: "Supprimer l'expérience",
          },
          templateElements: [
            {
              type: 'text',
              name: 'position',
              title: {
                default: 'Position',
                fr: 'Poste',
              },
              isRequired: true,
            },
            {
              type: 'text',
              name: 'company',
              title: {
                default: 'Company',
                fr: 'Entreprise',
              },
              isRequired: true,
            },
            {
              type: 'text',
              name: 'startDate',
              title: {
                default: 'Start date',
                fr: 'Date de début',
              },
              inputType: 'date',
              isRequired: true,
            },
            {
              type: 'text',
              name: 'endDate',
              title: {
                default: 'End date',
                fr: 'Date de fin',
              },
              inputType: 'date',
              isRequired: true,
              visibleIf: '{panel.untilNow}=false',
            },
            {
              type: 'boolean',
              name: 'untilNow',
              title: {
                default: 'Until now',
                fr: "Jusqu'à maintenant",
              },
              isRequired: true,
              defaultValue: false,
            },
            {
              type: 'comment',
              name: 'description',
              title: {
                default: 'Description of what you have worked on',
                fr: 'Description de ce sur quoi vous avez travaillé',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'resumeCoverLetter',
      navigationTitle: {
        default: 'Resume and cover letter',
        fr: 'CV et lettre de motivation',
      },
      navigationDescription: {
        default: 'Tell us why you are suitable for the position',
        fr: 'Dites-nous pourquoi vous correspondez au poste',
      },
      elements: [
        {
          type: 'file',
          name: 'resume',
          title: {
            default: 'Please upload your resume',
            fr: 'Veuillez télécharger votre CV',
          },
          showPreview: true,
          maxSize: 102400,
          isRequired: true,
        },
        {
          type: 'comment',
          name: 'coverLetter',
          title: {
            default: 'why you are suitable for the position ?',
            fr: 'pourquoi vous convenez pour le poste ?',
          },
          isRequired: true,
        },
      ],
    },
  ],
};

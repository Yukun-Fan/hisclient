import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import OnsiteRegistration from '@/views/registration/onsite_registration.vue'
import RegistrationRecord from '@/views/registration/registration_record.vue'
import ExpenseCharge from '@/views/registration/expense_charge.vue'
import ExpenseRefund from '@/views/registration/expense_refund.vue'
import ExpenseManage from '@/views/registration/expense_manage.vue'

import PhysicianPatient from '@/views/physician/physician_patient.vue'
import ExpenseQuery from '@/views/physician/expense_query.vue'
import HomeMedicalRecord from '@/views/physician/patient/home_medical_record'
import CheckRequest from '@/views/physician/patient/check_request'
import InspectionRequest  from '@/views/physician/patient/inspection_request'
import PhysicianHistory from '@/views/physician/patient/physician_history'
import CheckResults from '@/views/physician/patient/check_results'
import InspectionResults from '@/views/physician/patient/inspection_results'
import OutpatientDiagnosis from '@/views/physician/patient/outpatient_diagnosis'
import WritePrescription from '@/views/physician/patient/write_prescription'
import DisposalRequest from '@/views/physician/patient/disposal_request'

import CheckApply from '@/views/check/check_apply'
import CheckPatient from '@/views/check/check-patient'
import CheckInput from '@/views/check/check_input'
import CheckManage from '@/views/check/check-manage'

import InspectionApply from '@/views/inspection/inspection_apply'
import InspectionPatient from '@/views/inspection/inspection_patient'
import InspectionInput from '@/views/inspection/inspection_input'
import InspectionManage from '@/views/inspection/inspection_manage'

import GiveMedicine from '@/views/drugstore/give_medicine'
import DrugMedicine from '@/views/drugstore/drug_medicine'
import DrugStorage from '@/views/drugstore/drug_storage'
import TranHistory from '@/views/drugstore/tran_history'

import DisposalApply from '@/views/disposal/disposal_apply'
import DisposalPatient from '@/views/disposal/disposal_patient'
import DisposalInput from '@/views/disposal/disposal_input'
import DisposalManage from '@/views/disposal/disposal_manage'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout
  // },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-document",
    children: [
      {
        path: '/onsite_registration',
        name: '????????????',
        component: OnsiteRegistration
      },
      {
        path: '/registration_record',
        name: '????????????',
        component: RegistrationRecord
      },
      {
        path: '/expense_charge',
        name: '??????',
        component: ExpenseCharge
      },
      {
        path: '/expense_refund',
        name: '??????',
        component: ExpenseRefund
      },
      {
        path: '/expense_manage',
        name: '??????????????????',
        component: ExpenseManage
      },
    ]
  },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-user",
    children: [
      {
        path: '/physician_patient',
        name: '????????????',
        component: PhysicianPatient
      },
      {
        path: '/expense_query',
        name: '????????????',
        component: ExpenseQuery
      },
    ]
  },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-camera",
    children: [
      {
        path: '/check_apply',
        name: '????????????',
        component: CheckApply
      },
      {
        path: '/check-patient',
        name: '????????????',
        component: CheckPatient
      },
      {
        path: '/check-input',
        name: '????????????',
        component: CheckInput
      },
      {
        path: '/check-manage',
        name: '????????????',
        component: CheckManage
      }
    ]
  },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-headset",
    children: [
      {
        path: '/inspection_apply',
        name: '????????????',
        component: InspectionApply
      },
      {
        path: '/inspection_patient ',
        name: '????????????',
        component: InspectionPatient
      },
      {
        path: '/inspection_input',
        name: '????????????',
        component: InspectionInput
      },
      {
        path: '/inspection_manage',
        name: '????????????',
        component: InspectionManage
      },
    ]
  },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-wallet",
    children: [
      {
        path: '/give_medicine',
        name: '????????????',
        component: GiveMedicine
      },
      {
        path: '/drug_medicine',
        name: '????????????',
        component: DrugMedicine
      },
      {
        path: '/drug_storage',
        name: '????????????',
        component: DrugStorage
      },
      {
        path: '/tran_history',
        name: '????????????',
        component: TranHistory
      },
    ]
  },
  {
    path: '/',
    name: '????????????',
    component: Layout,
    iconCls:"el-icon-first-aid-kit",
    children: [
      {
        path: '/disposal_apply',
        name: '????????????',
        component: DisposalApply
      },
      {
        path: '/disposal_patient',
        name: '????????????',
        component: DisposalPatient
      },
      {
        path: '/disposal_input',
        name: '????????????',
        component: DisposalInput
      },
      {
        path: '/disposal_manage',
        name: '????????????',
        component: DisposalManage
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ApiUrls {
    mainUrl = 'http://lrapi.srikrishnatravels.in/';
    //mainUrl = environment.testPath;


    getCurrentUser = 'api/v1/user/me';
    getAllUsers = 'api/v1/userNames';
    getAllStaffList = 'api/v1/staff';
    getAgentNames = 'api/v1/agentNames';
    getSuppliers = 'api/v1/suppliers/';
    updateAgentName = 'api/v1/agent/update';

    // Cancellations API's
    pendingShipmentsCount = 'api/v1/shipment/count/cancellationPendingShipments';
    getAllPendingShipments = 'api/v1/shipment/get/pendingShipments';
    cancelledShipmentsCount = 'api/v1/shipment/count/cancelled';
    getAllCancelledShipments = 'api/v1/shipment/search/cancelled';

    // Operator Accounts API's
    getAllOperatorAccounts = 'api/v1/operatorAccount/all';
    saveOrUpdateOperatorAccount = 'api/v1/operatorAccount/';
    getOperatorAccount = 'api/v1/operatorAccount/';

    // Cities API's
    getCitiesCount = 'api/v1/cities/count';
    getAllCities = 'api/v1/cities';
    createCity = 'api/v1/city';
    getCity = 'api/v1/city/';
    updateCity = 'api/v1/city/';
    deleteCity = 'api/v1/city/';
    getActiveCityNames = 'api/v1/activeCityNames';

    // Branch Office API's
    branchOfficesCount = 'api/v1/branchOffices/count';
    getAllBranchOffices = 'api/v1/branchOffices';
    saveBranchOffice = 'api/v1/branchOffice';
    updateBranchOffice = 'api/v1/branchOffice/';
    getBranchOffice = 'api/v1/branchOffice/';
    loadBranchNames = 'api/v1/branchOffice/names';

    // Roles API's
    getRolesCount = 'api/v1/roles/count';
    getAllRoles = 'api/v1/roles';
    saveRole = 'api/v1/createRole';
    getRole = 'api/v1/role/';
    updateRole = 'api/v1/role/';
    deleteRole = 'api/v1/role/';

    // Users API's
    getUsers = 'api/v1/users';
    saveUser = 'api/v1/user';
    getUserByUserId = 'api/v1/userId/';
    updateUser = 'api/v1/userEdit/';
    deleteUser = 'api/v1/user/';

    // Amenities API's
    getAmenitiesCount = 'api/v1/amenities/count';
    getAllAmenities = 'api/v1/amenities';
    getAmenityById = 'api/v1/amenity/';
    updateAmenity = 'api/v1/amenity/';
    saveAmenity = 'api/v1/amenity';
    deleteAmenity = 'api/v1/amenity/';

    // Vehicles API's
    getVehiclesCount = 'api/v1/vehicle/count';
    getAllVehicles = 'api/v1/vehicles';
    saveVehicle = 'api/v1/vehicle';
    updateVehicle = 'api/v1/vehicle/';
    getVehicleById = 'api/v1/vehicle/';
    deleteVehicle = 'api/v1/vehicle/';

    // transactions
    search = 'api/v1/transactions/search';
    count = 'api/v1/transactions/count';

    // Payments
    pendingPayments = 'api/v1/payments/pending';
    approvedPayments = 'api/v1/payments/approved';
    countPendingPayments = 'api/v1/payments/count?pending=true';
    countApprovedPayments = 'api/v1/payments/count?pending=false';
    delete = 'api/v1/payment';
    branchOfficeNames = 'api/v1/branchOffice/names';
    savePayment = 'api/v1/payment';
    updatePayment = 'api/v1/payment/';
    searchPayments = 'api/v1/payment/search';
    verifyPayment = 'api/v1/payment/verifyPayment/';
    approveOrReject = 'api/v1/payment/approveOrReject/';
    booking = 'api/v1/serviceReport/booking/';


    // New Cargo Booking API's
    getShipmentTypes = 'api/v1/shipment/types';
    saveNewCargoBooking = 'api/v1/shipment';
    getCargoDetailsById = 'api/v1/shipment/';
    findContactInfoFromPreviousBookings = 'api/v1/shipment/findContactInfo';
    cargoDetailsByLR = 'api/v1/shipment/search/byLR';
    cargoBookingsCount = 'api/v1/shipments/count';
    cargoBookings = 'api/v1/shipments';
    initiateDeliverCargoBooking = 'api/v1/shipment/deliver/';
    cancelCargoBooking = 'api/v1/shipment/cancel/';
    sendSMSForCargoBooking = 'api/v1/shipment/sendSMS/';
    getCargoBooking = 'api/v1/shipment/';
    saveCommentCargoBooking = 'api/v1/shipment/addCommentToBooking/';

    // Suppliers
    getAllSuppliers = 'api/v1/suppliers/';
    getSupplier = 'api/v1/suppliers/';
    updateSupplier = 'api/v1/suppliers/';
    addSupplier = 'api/v1/suppliers/';
    deleteSupplier = 'api/v1/suppliers/';

    // Branch Booking Summary
    branchBookingSummary = 'api/v1/shipment/branchSummary';

    // Cargo Loading Sheet
    getBookingsForLoading = 'api/v1/shipment/search/loading';
    loadToVehicle = 'api/v1/shipment/assignVehicle/';

    // Unloading Sheet
    getBookingsForUnloading = 'api/v1/shipment/search/unloading';
    unloadVehicle = 'api/v1/shipment/unload';

    // Delivery Sheet API's
    getBookingsForDelivery = 'api/v1/shipment/search/undelivered';
    branchCashBalances = 'api/v1/user/branchCashBalances/';
    countDeliveredBookings = 'api/v1/shipment/countDeliveredBookings';
    deliveredBookings = 'api/v1/shipment/deliveredBookings';

    // Cargo Trip Sheet API's
    searchCargoTripSheet = 'api/v1/cargoTripSheet/search';
    getCargoTripSheet = 'api/v1/cargoTripSheet/get/';
    updateTripSheet = 'api/v1/cargoTripSheet/update';
    closeTripSheet = 'api/v1/cargoTripSheet/closeTripSheet/';
    getTripSheetSummary = 'api/v1/cargoTripSheet/getSummary/';
    approveCancellation = 'api/v1/shipment/approveCancellation';

    // Service Income Reports API's
    getDistinctSource = 'api/v1/serviceReport/getCities';
    searchServiceReport = 'api/v1/serviceReport/incomeReport';
    serviceReportByServiceId = 'api/v1/serviceReport/serviceIncomeReportDaily';

    // Service Form API's
     getDetailsByFormId = 'api/v1/serviceForm/';


     // Service Report API's
     getServiceReportDetails = 'api/v1/serviceReport/';
     updateVehicleRegNo = 'api/v1/vehicle/odometerReading/';
     submitReport = 'api/v1/serviceReport/';

    // Agents API's
    getAllAgents = 'api/v1/agents';
    getAgentsCount = 'api/v1/agent/count';
    addAgent = 'api/v1/agent/addAgent';
    editAgent = 'api/v1/agent/';
    updateAgent = 'api/v1/agent/update';

    // Staff API's
    getStaffList = 'api/v1/staff';
    getStaffCount = 'api/v1/staff/count';
    getStaffDetails = 'api/v1/staff/';
    addNewStaff = 'api/v1/staff/create';
    editStaff = 'api/v1/staff/';

    // OfficeExpenses
    pendingCount = 'api/v1/officeExpenses/count?pending=true';
    allPending = 'api/v1/officeExpenses/pending';
    approvedCount = 'api/v1/officeExpenses/count?pending=false';
    allApproves = 'api/v1/officeExpenses/approved';
    searchExpense = 'api/v1/officeExpenses/search';
    expensesTypes = 'api/v1/officeExpenses/types';
    getExpense = 'api/v1/officeExpense/';
    approveOrRejectStatus = 'api/v1/officeExpenses/approveOrReject/';
    addExpense = 'api/v1/officeExpense/';
    editExpense = 'api/v1/officeExpense/';
    deleteOfficeExpense = 'api/v1/officeExpense/';
    suppliers = 'api/v1/suppliers/';
    vehiclesList = 'api/v1/vehicles';
    fileUpload = 'api/v1/fileUpload';
    getFile = 'api/v1/getUploads/';
}

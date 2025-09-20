import React, { useState, useEffect, useCallback } from 'react';

// --- ⚙️ CONFIGURATION ---
// Your Airtable credentials have been added below.
const AIRTABLE_CONFIG = {
  API_KEY: 'patl9nZ2QWVkj52BK.365f8e7a663af9965b7f296777066740f5cee50440990f0af8e66a9b8ffaee8a',
  BASE_ID: 'appMVpD8rLAkkv7dv',
};

// Enter the exact names of your tables in Airtable.
const TABLE_NAMES = {
  MENU: 'Menu',
  CUSTOMERS: 'Customers',
  ORDERS: 'Orders',
};
// -------------------------

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.BASE_ID}`;

// --- Helper for API Calls ---
const apiFetch = async (tableName, method = 'GET', body = null) => {
  const url = `${AIRTABLE_API_URL}/${tableName}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AIRTABLE_CONFIG.API_KEY}`,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Airtable API Error:', errorData);
    throw new Error(`Airtable API error for table ${tableName}: ${errorData.error?.message || response.statusText}`);
  }
  return response.json();
};


// --- SVG Icons ---
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
  </svg>
);


// --- Reusable Components ---
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const PageContainer = ({ title, children, actions }) => (
  <div className="p-4 sm:p-6 lg:p-8">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h1>
      {actions && <div className="flex space-x-2">{actions}</div>}
    </header>
    <main className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      {children}
    </main>
  </div>
);

const Button = ({ onClick, children, variant = 'primary', type = 'button' }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold shadow-sm transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  };
  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};


// --- Main Application Components ---

/**
 * PAGE 2: Orders Dashboard
 */
const DashboardPage = ({ orders, customers, onNavigate, onRefresh }) => {
  const getCustomerName = (customerId) => {
    if (!customerId || !customers.length) return 'N/A';
    const customer = customers.find(c => c.id === customerId[0]);
    return customer?.fields.Name || 'Unknown Customer';
  };

  return (
    <PageContainer
      title="Orders Dashboard"
      actions={
        <>
          <Button onClick={onRefresh} variant="secondary">Refresh</Button>
          <Button onClick={() => onNavigate('newOrder')}>
            <span className="flex items-center gap-2"><PlusIcon /> New Order</span>
          </Button>
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final Quote</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getCustomerName(order.fields.Customer)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.fields.Event_Date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.fields.Status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                    order.fields.Status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    order.fields.Status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.fields.Status || 'Quoted'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.fields.Final_Quote?.toFixed(2) || '0.00'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('editOrder', order); }} className="text-blue-600 hover:text-blue-900">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};


/**
 * PAGE 1 & 3: New/Edit Order Form
 */
const OrderFormPage = ({ menu, customers, existingOrder, onSave, onCancel }) => {
  const [order, setOrder] = useState({
    Customer: existingOrder?.fields.Customer || [],
    Event_Date: existingOrder?.fields.Event_Date || '',
    Order_Items: existingOrder?.fields.Order_Items ? JSON.parse(existingOrder.fields.Order_Items) : [],
    Final_Quote: existingOrder?.fields.Final_Quote || 0,
    Status: existingOrder?.fields.Status || 'Quoted',
    Payment_Status: existingOrder?.fields.Payment_Status || 'Unpaid',
    Amount_Paid: existingOrder?.fields.Amount_Paid || 0,
    Notes: existingOrder?.fields.Notes || '',
  });
  
  const [newCustomer, setNewCustomer] = useState({ name: '', phone: '', email: '' });
  const [isCreatingCustomer, setIsCreatingCustomer] = useState(false);

  const suggestedQuote = useCallback(() => {
    return order.Order_Items.reduce((total, item) => {
      const menuItem = menu.find(m => m.id === item.id);
      if (!menuItem) return total;
      
      const priceFieldMap = {
        'Small': 'Price_Small',
        'Large Shallow': 'Price_Large_Shallow',
        'Large Deep': 'Price_Large_Deep',
      };
      const priceField = priceFieldMap[item.size];
      const price = menuItem.fields[priceField] || 0;
      return total + (price * item.quantity);
    }, 0);
  }, [order.Order_Items, menu]);

  useEffect(() => {
    if (!existingOrder) { // Only auto-update for new orders
      setOrder(prev => ({ ...prev, Final_Quote: suggestedQuote() }));
    }
  }, [order.Order_Items, existingOrder, suggestedQuote]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...order.Order_Items];
    newItems[index][field] = value;
    setOrder(prev => ({ ...prev, Order_Items: newItems }));
  };

  const addItem = () => {
    setOrder(prev => ({ ...prev, Order_Items: [...prev.Order_Items, { id: '', size: 'Small', quantity: 1 }] }));
  };

  const removeItem = (index) => {
    const newItems = order.Order_Items.filter((_, i) => i !== index);
    setOrder(prev => ({ ...prev, Order_Items: newItems }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let customerId = order.Customer;
    // If creating a new customer, save them first
    if (isCreatingCustomer && newCustomer.name) {
      try {
        const newCustomerRecord = await apiFetch(TABLE_NAMES.CUSTOMERS, 'POST', {
          fields: {
            Name: newCustomer.name,
            Phone: newCustomer.phone,
            Email: newCustomer.email,
          }
        });
        customerId = [newCustomerRecord.id];
      } catch (error) {
        alert("Error creating customer. Please try again.");
        return;
      }
    }
    
    const orderData = {
      ...order,
      Customer: customerId,
      Order_Items: JSON.stringify(order.Order_Items),
      Suggested_Quote: suggestedQuote(),
      // Ensure numeric fields are numbers
      Final_Quote: Number(order.Final_Quote),
      Amount_Paid: Number(order.Amount_Paid),
    };
    onSave(orderData, existingOrder?.id);
  };
  
  return (
    <PageContainer
      title={existingOrder ? `Edit Order #${existingOrder.fields.OrderID}` : 'Create New Order'}
      actions={<Button onClick={onCancel} variant="secondary">Cancel</Button>}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Section */}
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Customer</h3>
          {!isCreatingCustomer ? (
            <div className="flex items-center gap-4">
              <select name="Customer" value={order.Customer[0] || ''} onChange={(e) => setOrder(prev => ({ ...prev, Customer: [e.target.value] }))} className="flex-grow p-2 border rounded-md">
                <option value="">Select Existing Customer</option>
                {customers.map(c => <option key={c.id} value={c.id}>{c.fields.Name}</option>)}
              </select>
              <Button onClick={() => setIsCreatingCustomer(true)}>Add New</Button>
            </div>
          ) : (
            <div className="space-y-2 bg-gray-50 p-3 rounded-md">
              <input type="text" placeholder="New Customer Name" value={newCustomer.name} onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})} className="w-full p-2 border rounded-md" required/>
              <input type="tel" placeholder="Phone" value={newCustomer.phone} onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})} className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" value={newCustomer.email} onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})} className="w-full p-2 border rounded-md" />
              <Button onClick={() => setIsCreatingCustomer(false)} variant="secondary">Use Existing</Button>
            </div>
          )}
        </div>

        {/* Order Items Section */}
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Order Items</h3>
          {order.Order_Items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2 p-2 bg-gray-50 rounded-md items-center">
              <select value={item.id} onChange={(e) => handleItemChange(index, 'id', e.target.value)} className="md:col-span-5 p-2 border rounded-md">
                <option value="">Select Menu Item</option>
                {menu.map(m => <option key={m.id} value={m.id}>{m.fields.Name}</option>)}
              </select>
              <select value={item.size} onChange={(e) => handleItemChange(index, 'size', e.target.value)} className="md:col-span-3 p-2 border rounded-md">
                <option>Small</option>
                <option>Large Shallow</option>
                <option>Large Deep</option>
              </select>
              <input type="number" min="1" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 1)} className="md:col-span-2 p-2 border rounded-md" />
              <button type="button" onClick={() => removeItem(index)} className="md:col-span-2 text-red-500 hover:text-red-700 flex justify-center items-center"><TrashIcon/></button>
            </div>
          ))}
          <Button onClick={addItem}>Add Item</Button>
        </div>

        {/* Details & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg space-y-4">
                <h3 className="font-semibold">Details</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Event Date</label>
                    <input type="date" name="Event_Date" value={order.Event_Date} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea name="Notes" value={order.Notes} onChange={handleInputChange} rows="3" className="mt-1 block w-full p-2 border rounded-md"></textarea>
                </div>
            </div>
            <div className="p-4 border rounded-lg space-y-4 bg-blue-50">
                <h3 className="font-semibold">Pricing & Status</h3>
                <div className="text-lg">Suggested Quote: <span className="font-bold text-blue-700">${suggestedQuote().toFixed(2)}</span></div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Final Quote ($)</label>
                    <input type="number" step="0.01" name="Final_Quote" value={order.Final_Quote} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount Paid ($)</label>
                    <input type="number" step="0.01" name="Amount_Paid" value={order.Amount_Paid} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Order Status</label>
                        <select name="Status" value={order.Status} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md">
                            <option>Quoted</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Payment Status</label>
                        <select name="Payment_Status" value={order.Payment_Status} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md">
                            <option>Unpaid</option><option>Deposit Paid</option><option>Paid in Full</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit">Save Order</Button>
        </div>
      </form>
    </PageContainer>
  );
};


/**
 * Main App Component
 */
export default function App() {
  const [page, setPage] = useState('dashboard'); // 'dashboard', 'newOrder', 'editOrder'
  const [editingOrder, setEditingOrder] = useState(null);
  
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [menu, setMenu] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    if (!AIRTABLE_CONFIG.API_KEY || AIRTABLE_CONFIG.API_KEY.includes('YOUR_')) {
        setError("Airtable API Key is not configured properly.");
        setIsLoading(false);
        return;
    }
    try {
      const [ordersRes, customersRes, menuRes] = await Promise.all([
        apiFetch(`${TABLE_NAMES.ORDERS}?sort%5B0%5D%5Bfield%5D=Event_Date&sort%5B0%5D%5Bdirection%5D=desc`),
        apiFetch(`${TABLE_NAMES.CUSTOMERS}?sort%5B0%5D%5Bfield%5D=Name&sort%5B0%5D%5Bdirection%5D=asc`),
        apiFetch(`${TABLE_NAMES.MENU}?sort%5B0%5D%5Bfield%5D=Name&sort%5B0%5D%5Bdirection%5D=asc`)
      ]);
      setOrders(ordersRes.records || []);
      setCustomers(customersRes.records || []);
      setMenu(menuRes.records || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNavigate = (targetPage, order = null) => {
    setEditingOrder(order);
    setPage(targetPage);
  };

  const handleSaveOrder = async (orderData, orderId) => {
    setIsLoading(true);
    const method = orderId ? 'PATCH' : 'POST';
    const payload = orderId ? { records: [{ id: orderId, fields: orderData }] } : { records: [{ fields: orderData }] };
    const tableName = TABLE_NAMES.ORDERS;
    
    try {
      await apiFetch(tableName, method, payload);
      await fetchData(); // Refresh data after saving
      setPage('dashboard');
    } catch (err) {
      alert(`Error saving order: ${err.message}`);
      setIsLoading(false);
    }
  };

  const renderPage = () => {
    if (isLoading && !orders.length) return <LoadingSpinner />;
    if (error) return <div className="p-8 text-center text-red-600 bg-red-100 rounded-lg m-4">Error: {error}</div>;

    switch (page) {
      case 'newOrder':
        return <OrderFormPage menu={menu} customers={customers} onSave={handleSaveOrder} onCancel={() => setPage('dashboard')} />;
      case 'editOrder':
        return <OrderFormPage menu={menu} customers={customers} existingOrder={editingOrder} onSave={handleSaveOrder} onCancel={() => setPage('dashboard')} />;
      case 'dashboard':
      default:
        return <DashboardPage orders={orders} customers={customers} onNavigate={handleNavigate} onRefresh={fetchData} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {isLoading && orders.length > 0 && (
          <div className="fixed top-4 right-4 bg-blue-500 text-white text-sm py-1 px-3 rounded-full shadow-lg z-50 animate-pulse">
              Syncing...
          </div>
      )}
      {renderPage()}
    </div>
  );
}

